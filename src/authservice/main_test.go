package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

// TestIsEmpty is basic check on the isEmpty Method
func TestIsEmpty(t *testing.T) {
	c := client{}
	if !c.isEmpty() {
		t.Errorf("TestIsEmpty: isEmpty not equal to true")
	}
	c = client{username: "testuser", password: "testpassword", csrfToken: "exampleToken"}
	if c.isEmpty() {
		t.Errorf("TestIsEmpty: isEmpty not equal to false")
	}
}

func TestAuth(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/login", nil)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NjUyMzg2MDgsImV4cCI6MTY5Njc3NDYxNywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsInVzZXJuYW1lIjoiamFjayIsInBhc3N3b3JkIjoic3BhcnJvdyIsImNzcmZUb2tlbiI6ImNzcmZUb2tlbiJ9.G47Qc2CpSwy2uCctrLAcZrvWoXZQTrRhmt65XkeWDD0")
	w := httptest.NewRecorder()
	auth(w, req)
	res := w.Result()
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		t.Errorf("TestAuth: Expected StatusOK got %v", res.StatusCode)
	}
	if res.Header.Get("Authorized") == "" {
		t.Errorf("TestAuth: Expected Authorized header, got nil")
	}
}
