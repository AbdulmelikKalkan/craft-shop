package main

import (
	"io"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetProducts(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/get", nil)
	w := httptest.NewRecorder()
	getProducts(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := io.ReadAll(res.Body)
	if err != nil {
		t.Errorf("TestGetProducts: Expected error to be nil got %v", err)
	}
	if string(data) == "" {
		t.Errorf("TestGetProducts: Expected Json got empty")
	}
}

func TestGetProduct(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/product/1", nil)
	w := httptest.NewRecorder()
	getProduct(w, req)
	res := w.Result()
	defer res.Body.Close()
	data, err := io.ReadAll(res.Body)
	if err != nil {
		t.Errorf("TestGetProduct: Expected error to be nil got %v", err)
	}
	if string(data) == "" {
		t.Errorf("TestGetProduct: Expected Json got empty")
	}
}

func TestParseProduct(t *testing.T) {
	p := parseProduct()
	if len(p) <= 0 {
		t.Errorf("TestParseProduct: Expected array map interface got empty")
	}
}
