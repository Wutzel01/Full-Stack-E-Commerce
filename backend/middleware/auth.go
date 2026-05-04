package middleware

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/config"
	"github.com/Wutzel01/Full-Stack-E-Commerce/backend/models"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

func Authenticate(c *gin.Context) {

	// Get the cookie of req
	tokenString, err := c.Cookie("Authorization")

	// kein Anmelde-Cookie vorhanden
	if err != nil {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

	// Decode & validate it
	// Parse takes the token string and a function for looking up the key
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (any, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("Unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(os.Getenv("JWT_SECRET")), nil
	})

	if claims, ok := token.Claims.(jwt.MapClaims); ok {
		// Check the exp
		if float64(time.Now().Unix()) > claims["exp"].(float64) {
			c.AbortWithStatus(http.StatusUnauthorized)
		}
		fmt.Println("Get cookie of req")
		// Find the user with token sub
		var user models.User
		config.DB.First(&user, claims["sub"])

		if user.ID == 0 {
			c.AbortWithStatus(http.StatusUnauthorized)
		}

		// Attach to req
		c.Set("user", user)

		//Continue
		c.Next()

	} else {
		c.AbortWithStatus(http.StatusUnauthorized)
	}

}
