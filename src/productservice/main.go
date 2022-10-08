package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path"
)

type Product struct {
	id    string `json:"id"`
	src   string `json:"src"`
	title string `json:"title"`
	price string `json:"price"`
}

func main() {
	fmt.Println("Product Service")

	http.HandleFunc("/", root)
	http.HandleFunc("/get", getProducts)
	http.HandleFunc("/product/", getProduct)
	err := http.ListenAndServe(":8090", nil)
	if err != nil {
		log.Fatalf("There was an error listening port: 8080 %v", err)
	}
}

// getProducts reads products json file and writes json to response
func getProducts(w http.ResponseWriter, r *http.Request) {
	// Read json file
	fmt.Println("Hit to /getProducts")
	byteValue, err := os.ReadFile("products.json")
	if err != nil {
		log.Fatalf("failed to open products json file: %v", err)
	}

	// send json with response body
	w.Write(byteValue)
}

func getProduct(w http.ResponseWriter, r *http.Request) {
	productId := path.Base(r.URL.String())
	for _, v := range parseProduct() {
		id := fmt.Sprint(v["id"])
		if id == productId {
			fmt.Println(v)
			b, _ := json.Marshal(v)
			w.Write(b)
		}
	}
}

func root(w http.ResponseWriter, r *http.Request) {
	// Forbidden to access root
	fmt.Println("Hit to /")
	w.WriteHeader(http.StatusForbidden)
}

func parseProduct() []map[string]interface{} {

	p := []map[string]interface{}{}
	byteValue, err := os.ReadFile("products.json")
	if err != nil {
		log.Fatalf("failed to open products json file: %v", err)
	}
	err = json.Unmarshal(byteValue, &p)
	if err != nil {
		log.Fatalf("There was an error unmarshalling %v", err)
	}
	return p
}
