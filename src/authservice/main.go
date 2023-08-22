// Copyright 2022 Abdulmelik Kalkan
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/golang-jwt/jwt"
)

var mySigningKey = []byte("captainjacksparrowsaysgoodnight")

type user struct {
	username string
	password string
}

func main() {
	fmt.Println("Hello Auth Service")

	http.HandleFunc("/", root)
	http.HandleFunc("/login", auth)
	http.HandleFunc("/verify", verifyJWT)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("There was an error listening port :8080 %v", err)
	}
}

func auth(w http.ResponseWriter, r *http.Request) {
	var u user
	fmt.Println("Hit to /login")

	// Check if Authorization header exist in the request headers
	authHeader := r.Header.Get("Authorization")
	if authHeader != "" {
		if strings.HasPrefix(authHeader, "Basic") {
			username, password, ok := r.BasicAuth()
			if ok {
				u.username = username
				u.password = password
				name, email := authorize(&u)
				if name != "" && email != "" {
					accessToken, err := generateJWT(u.username, email)
					if err != nil {
						fmt.Println("There was an error to generate JWT, %v", err)
					}
					w.Header().Set("Content-Type", "application/json")
					w.Header().Set("Access-Token", accessToken)
					ck := http.Cookie{
						Name:  "access_token",
						Value: accessToken,
					}
					w.Header().Set("Set-Cookie", ck.String())
					w.WriteHeader(http.StatusOK)
				}
			}
			w.Header().Set("WWW-Authenticate", `Basic realm="restricted", charset="UTF-8"`)
			w.WriteHeader(http.StatusUnauthorized)
		} else {
			fmt.Println("Undefined authentication method")
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	} else {
		fmt.Println("Authorization header not found!")
		w.WriteHeader(http.StatusUnauthorized)
	}
}

func verifyJWT(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Hit to /verify")
	authHeader := r.Header.Get("Authorization")
	if authHeader != "" {
		if strings.HasPrefix(authHeader, "Basic") {
			fmt.Println("auth-method: Basic")
			// TODO: Maybe forward to /login
			w.WriteHeader(http.StatusOK)
		} else if strings.HasPrefix(authHeader, "Bearer") {
			fmt.Println("auth-method: Bearer")
			token, err := jwt.Parse(strings.TrimPrefix(authHeader, "Bearer "), func(t *jwt.Token) (interface{}, error) {
				if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("Unauthorized!")
				}
				return mySigningKey, nil
			})
			if err != nil {
				// fmt.Printf("Unauthorized due to error parsing the JWT, %v\n", err)
				w.WriteHeader(http.StatusUnauthorized)
			}
			if token.Valid {
				w.WriteHeader(http.StatusOK)
			} else {
				fmt.Println("Unauthorized due to invalid token")
				w.WriteHeader(http.StatusUnauthorized)
			}
		} else {
			fmt.Println("Unsupported authorization type")
			w.WriteHeader(http.StatusMethodNotAllowed)
		}
	} else {
		fmt.Println("You're Unauthorized due to No token in the header")
		w.WriteHeader(http.StatusUnauthorized)
	}
}

func root(w http.ResponseWriter, r *http.Request) {
	// Forbidden to access root
	fmt.Println("Hit to /")
	w.WriteHeader(http.StatusForbidden)
}

// generateJWT creates claims with username and email of client and sign with token
// returns signed token
func generateJWT(username string, email string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["username"] = username
	claims["email"] = email
	claims["exp"] = time.Hour

	tokenString, err := token.SignedString(mySigningKey)
	if err != nil {
		fmt.Println("Something went wrong: %s", err.Error())
		return "Signing Error", err
	}
	return tokenString, nil
}

// authorize user
func authorize(c *user) (string, string) {
	// TODO: Database (PostgreSQL) Implementation

	// usernameHash := sha256.Sum256([]byte(username))
	// passwordHash := sha256.Sum256([]byte(password))
	// expectedUsernameHash := sha256.Sum256([]byte("your expected username"))
	// expectedPasswordHash := sha256.Sum256([]byte("your expected password"))
	// usernameMatch := (subtle.ConstantTimeCompare(usernameHash[:], expectedUsernameHash[:]) == 1)
	// passwordMatch := (subtle.ConstantTimeCompare(passwordHash[:], expectedPasswordHash[:]) == 1)
	// if usernameMatch && passwordMatch {
	// 	next.ServeHTTP(w, r)
	// 	return
	// }

	if c.username == "jack" && c.password == "sparrow" {
		return "Jack Sparrow", "jack@sparrow.com"
	}
	return "", ""
}
