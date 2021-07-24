package service

import (
	"errors"
	"fmt"
	"log"
	"server/model"

	_ "github.com/go-sql-driver/mysql"
	"github.com/go-xorm/xorm"
)

var DbEngine *xorm.Engine

func init() {
	driverName := "mysql"
	// 127.0.0.1ではなく、docker-composeのservice名を指定するっぽい
	DsName := "root:root@tcp(mysql:3306)/book?charset=utf8mb4&parseTime=true"
	err := errors.New("")
	DbEngine, err = xorm.NewEngine(driverName, DsName)
	if err != nil && err.Error() != "" {
		log.Fatal(err.Error())
	}
	DbEngine.ShowSQL(true)
	DbEngine.SetMaxOpenConns(2)
	DbEngine.Sync2(new(model.Book))
	fmt.Println("init data base ok")
}
