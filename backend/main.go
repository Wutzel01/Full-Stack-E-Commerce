package main

import (
	"time"

	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/config"
	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/controllers"
	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/middleware"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	config.LoadEnvVariables()
	config.ConnectToDb()
	config.SyncDatabase()
}

func main() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3001"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	r.POST("/signup", controllers.Signup)
	r.POST("/login", controllers.Login)
	r.GET("/validate", middleware.Authenticate, controllers.Validate)

	r.Run() // listen and serve on 0.0.0.0:8080
}
