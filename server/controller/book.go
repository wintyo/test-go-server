package controller

import (
	"net/http"
	"server/model"
	"server/service"
	"strconv"

	"github.com/gin-gonic/gin"
)

// BookAdd
// @Summary Bookを追加する
// @Tags book
// @Success 200
// @Router /api/v1/book [post]
func BookAdd(c *gin.Context) {
	book := model.Book{}
	err := c.Bind(&book)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	bookService := service.BookService{}
	err = bookService.SetBook(&book)
	if err != nil {
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"status": "ok",
	})
}

// BookList
// @Summary リストを返す
// @Tags book
// @Success 200 {array} []model.Book
// @Router /api/v1/books [get]
func BookList(c *gin.Context) {
	bookService := service.BookService{}
	bookList := bookService.GetBookList()
	c.JSON(http.StatusOK, bookList)
}

// BookUpdate
// @Summary Bookを更新する
// @Tags book
// @Param id path int true "Book Id"
// @Success 200
// @Router /api/v1/book/{id} [put]
func BookUpdate(c *gin.Context) {
	book := model.Book{}
	err := c.Bind(&book)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	bookService := service.BookService{}
	err = bookService.UpdateBook(&book)
	if err != nil {
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status": "ok",
	})
}

// DeleteBook
// @Summary Bookの削除
// @Tags book
// @Param id path int true "Book Id"
// @Success 200
// @Router /api/v1/book/{id} [delete]
func BookDelete(c *gin.Context) {
	id := c.Param("id")
	intId, err := strconv.ParseInt(id, 10, 0)
	if err != nil {
		c.String(http.StatusBadRequest, "Bad request")
		return
	}
	bookService := service.BookService{}
	err = bookService.DeleteBook(int(intId))
	if err != nil {
		c.String(http.StatusInternalServerError, "Server Error")
		return
	}
	c.JSON(http.StatusCreated, gin.H{
		"status": "OK",
	})
}
