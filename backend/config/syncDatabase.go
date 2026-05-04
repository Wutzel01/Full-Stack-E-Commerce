package config

import (
	"log"

	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/models"
)

func SyncDatabase() {
	err := DB.AutoMigrate(&models.User{})
	if err != nil {
		log.Fatal("Migration der Datenbank ist fehlgeschlagen: ", err)
	}

	//log.Println("Database migrated")
}
