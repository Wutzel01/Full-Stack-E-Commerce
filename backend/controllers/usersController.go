package controllers

import (
	"net/http"
	"os"
	"time"

	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/config"
	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/models"

	//"github.com/appleboy/gin-jwt/v2"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
)

func Signup(c *gin.Context) {
	// Get the email & pass off req body
	var body struct {
		Email    string
		Password string
	}

	// Get user input
	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	/*
		if c.Bind(&body) != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": err.Error()})
			return

		}*/

	// Hash the password
	hash, err := bcrypt.GenerateFromPassword([]byte(body.Password), 10)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Hashen des Passworts ist fehlgeschlagen!"})
		return
	}

	// Create the user
	user := models.User{Email: body.Email, Password: string(hash)}
	result := config.DB.Create(&user)

	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Erstellen eines Benutzers ist fehlgeschlagen",
		})
		return
	}

	// Respond
	c.JSON(http.StatusOK, gin.H{})

}

func Login(c *gin.Context) {
	// Get the email & pass off req body
	var body struct {
		Email    string
		Password string
	}

	// Get user input
	if err := c.BindJSON(&body); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error()})
		return
	}

	// Look up requested user
	var user models.User
	config.DB.First(&user, "email = ?", body.Email)
	// SELECT * FROM users WHERE email = body.Email;

	if user.ID == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Ungültige Email oder Passwort",
		})
		return
	}

	// Compare sent in pass with saved user pass hash
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(body.Password))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Ungültige Email oder Passwort",
		})
		return
	}

	// Generate a jwt token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	// Sign and get complete encoded token as a string using secret-key
	tokenString, err := token.SignedString([]byte(os.Getenv("JWT_SECRET")))

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Erstellen eines Tokens ist fehlgeschlagen",
		})
		return
	}

	// send it back
	c.SetSameSite(http.SameSiteLaxMode)
	c.SetCookie("Authorization", tokenString, 3600*24*30, "", "", false, true)

	c.JSON(http.StatusOK, gin.H{})

}

func Validate(c *gin.Context) {
	user, _ := c.Get("user")

	c.JSON(http.StatusOK, gin.H{
		"message": user,
	})

}
