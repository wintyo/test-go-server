package model

type Book struct {
	Id      int64  `xorm:"pk autoincr int(64)" json:"id" form:"id" example:"1"`
	Title   string `xorm:"varchar(40)" json:"title" form:"title" example:"本のタイトル"`
	Content string `xorm:"varchar(40)" json:"content" form:"content" example:"本の内容"`
}
