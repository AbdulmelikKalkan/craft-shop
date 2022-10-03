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
	"time"

	"github.com/golang-jwt/jwt"
)

var mySigningKey = []byte("captainjacksparrowsaysgoodnight")
var clientSigningKey = []byte("captainjacksparrowsayshi")

type client struct {
	username  string
	password  string
	csrfToken string
}

func main() {
	fmt.Println("Hello Auth Service")

	http.HandleFunc("/", root)
	http.HandleFunc("/auth", auth)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatalf("There was an error listening port :8080 %v", err)
	}
}

// isEmpty checks struct variables are empty or not
func (c client) isEmpty() bool {
	return c.username == "" || c.password == ""
}

func auth(w http.ResponseWriter, r *http.Request) {
	var c client

	// Check if token exist in the request header
	if r.Header["Token"] != nil {
		// Parse Token
		token, err := jwt.Parse(r.Header["Token"][0], func(t *jwt.Token) (interface{}, error) {
			if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("there was an error")
			}
			return clientSigningKey, nil
		})
		if err != nil {
			log.Fatalf("There was an error parsing token, %v", err)
		}

		// Get claims from Token that received in the request header
		claims, ok := token.Claims.(jwt.MapClaims)

		// If token is valid, set claims to client struct
		if ok && token.Valid {
			// another way to exract claims as a string
			// c.username = claims["username"].(string)
			c.username = fmt.Sprint(claims["username"])
			c.password = fmt.Sprint(claims["password"])
			c.csrfToken = fmt.Sprint(claims["csrfToken"])
		}

	}

	// If client variables are not empty,
	// generate JWT and set jwttoken to response header
	if !c.isEmpty() {
		n, e := authorize(&c)
		if n != "" && e != "" {
			authToken, err := generateJWT(n, e)
			if err != nil {
				log.Fatalf("There was an error to generate JWT, %v", err)
			}

			w.Header().Set("Content-Type", "application/json")
			w.Header().Set("Authorized", authToken)
		} else {
			log.Printf("unauthorized client, %v", c.username)
			w.WriteHeader(http.StatusUnauthorized)
		}
	}

}

func root(w http.ResponseWriter, r *http.Request) {
	// Forbidden to access root
	w.WriteHeader(http.StatusForbidden)
}

// generateJWT creates claims with username and email of client and sign with token
// returns signed token
func generateJWT(n string, e string) (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["name"] = n
	claims["email"] = e
	claims["exp"] = time.Hour

	tokenString, err := token.SignedString(mySigningKey)
	if err != nil {
		log.Fatalf("Something went wrong: %s", err.Error())
		return "Signing Error", err
	}
	return tokenString, nil
}

// authorize client
func authorize(c *client) (string, string) {
	if c.username == "jack" && c.password == "sparrow" {
		return "Jack Sparrow", "jack@sparrow.com"
	}
	return "", ""
}
