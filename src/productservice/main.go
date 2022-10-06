package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

func main() {
	fmt.Println("Product Service")

	http.HandleFunc("/", root)
	http.HandleFunc("/get", getProducts)
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

func root(w http.ResponseWriter, r *http.Request) {
	// Forbidden to access root
	fmt.Println("Hit to /")
	w.WriteHeader(http.StatusForbidden)
}
