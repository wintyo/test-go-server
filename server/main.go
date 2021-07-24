package main

import (
	"server/controller"

	"github.com/gin-gonic/gin"
)

func main() {
	engine := gin.Default()
	apiEngine := engine.Group("/api")
	{
		v1 := apiEngine.Group("/v1")
		{
			v1.POST("/add", controller.BookAdd)
			v1.GET("/list", controller.BookList)
			v1.PUT("/update", controller.BookUpdate)
			v1.DELETE("/delete/:id", controller.BookDelete)
		}
	}
	engine.Run(":8080")
}
