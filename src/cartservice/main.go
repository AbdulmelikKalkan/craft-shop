package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/go-redis/redis/v9"
)

var ctx = context.Background()

type Cart struct {
	SessionId string     `json:"sessionId"`
	CartItem  []CartItem `json:"cartItems"`
}

type CartItem struct {
	ProductId string `json:"productId"`
	Quantity  string `json:"quantity"`
}

func main() {
	fmt.Println("Cart Service")

	router := gin.Default()
	router.POST("/cart", addToCart)
	router.POST("/carts", getCart)
	router.POST("/count", getCount)
	router.Run(":9000")
}

func addToCart(c *gin.Context) {

	fmt.Println("Hit to POST /cart")
	var cart Cart
	if err := c.BindJSON(&cart); err != nil {
		log.Fatalf("There was an error getting request body: %v", err)
		c.IndentedJSON(http.StatusBadRequest, nil)
	}

	fmt.Println(cart)

	j, err := json.Marshal(cart)
	if err != nil {
		log.Fatalf("There was an error marshalling: %v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil)
	}
	if err := insertCart(cart.SessionId, j); err != nil {
		log.Fatalf("There was an error inserting cart item: %v", err)
		c.IndentedJSON(http.StatusInternalServerError, nil)
	} else {
		c.IndentedJSON(http.StatusCreated, cart)
	}
	// val, err := rdb.Get(ctx, "product").Result()
	// if err != nil {
	// 	panic(err)
	// }

}

func getCart(c *gin.Context) {
	fmt.Println("Hit to Get /cart")
	var cart Cart
	if err := c.BindJSON(&cart); err != nil {
		log.Fatalf("There was an error getting request body: %v", err)
		c.IndentedJSON(http.StatusBadRequest, nil)
	}
	rdb := redis.NewClient(&redis.Options{
		Addr:     "redis-dev:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	val, err := rdb.Get(ctx, cart.SessionId).Result()
	if err != nil {
		panic(err)
	}
	fmt.Println(val)
	c.IndentedJSON(http.StatusOK, val)
}

func getCount(c *gin.Context) {
	var cart Cart
	var count int
	if err := c.BindJSON(&cart); err != nil {
		log.Fatalf("There was an error getting request body: %v", err)
		c.IndentedJSON(http.StatusBadRequest, nil)
	}
	rdb := redis.NewClient(&redis.Options{
		Addr:     "redis-dev:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})
	val, err := rdb.Get(ctx, cart.SessionId).Result()
	if err != nil {
		panic(err)
	}
	json.Unmarshal([]byte(val), &cart)
	for _, v := range cart.CartItem {
		i, _ := strconv.Atoi(v.Quantity)
		count = count + i
	}
	c.IndentedJSON(http.StatusOK, count)
}

func insertCart(key string, value []byte) error {
	rdb := redis.NewClient(&redis.Options{
		Addr:     "redis-dev:6379",
		Password: "", // no password set
		DB:       0,  // use default DB
	})

	err := rdb.Set(ctx, strings.TrimSpace(key), string(value), 0).Err()
	if err != nil {
		return err
	}
	return nil
}
