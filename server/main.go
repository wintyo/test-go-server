package main

import (
	"server/controller"

	"github.com/gin-gonic/gin"
	ginSwagger "github.com/swaggo/gin-swagger"
	"github.com/swaggo/gin-swagger/swaggerFiles"
)

// @title Swagger Example Book API
// @version 1.0

// @BasePath http://localhost:8080
func main() {
	engine := gin.Default()
	apiEngine := engine.Group("/api")
	{
		v1 := apiEngine.Group("/v1")
		{
			v1.POST("/book", controller.BookAdd)
			v1.GET("/books", controller.BookList)
			v1.PUT("/book/:id", controller.BookUpdate)
			v1.DELETE("/book/:id", controller.BookDelete)
		}
	}
	// なぜかswagger uiが見れない
	engine.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	engine.Run(":8080")
}
