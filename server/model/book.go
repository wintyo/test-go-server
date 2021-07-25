package model

import "time"

type Book struct {
	Id int64 `xorm:"pk autoincr int(64)" json:"id" form:"id" example:"1"`
	// 0: 気になる
	// 1: 購入済
	// 2: 読了
	Status   int16     `xorm:"int(16)" json:"status" enums:"0,1,2"`
	Title    string    `xorm:"varchar(40)" json:"title" form:"title" validate:"required" example:"本のタイトル"`
	Content  string    `xorm:"varchar(40)" json:"content" form:"content" validate:"required" example:"本の内容"`
	BoughtAt time.Time `xorm:"datetime(6)" json:"bought_at" format:"date" validate:"required" example:"2021-07-01"`
}
