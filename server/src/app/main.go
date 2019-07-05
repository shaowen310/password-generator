package main

import (
	"crypto/hmac"
	"crypto/sha512"
	"encoding/base64"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

type passwordGen struct {
	MasterPassword    string `json:"masterPassword"`
	SecondPassword    string `json:"secondPassword"`
	Length            string `json:"length"`
	GeneratedPassword string `json:"generatedPassword"`
}

func generatePassword(passwordGen passwordGen) string {
	hash := hmac.New(sha512.New, []byte(passwordGen.MasterPassword))
	io.WriteString(hash, passwordGen.SecondPassword)

	len, err := strconv.Atoi(passwordGen.Length)
	if err != nil {
		return err.Error()
	}

	str := base64.StdEncoding.EncodeToString(hash.Sum(nil))
	return str[0:len]
}

func handleGeneratePassword(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var passwordGen passwordGen
	json.NewDecoder(r.Body).Decode(&passwordGen)
	passwordGen.GeneratedPassword = generatePassword(passwordGen)
	json.NewEncoder(w).Encode(passwordGen)
}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/api/generatePassword", handleGeneratePassword).Methods("POST")

	log.Fatal(http.ListenAndServe(":5000", router))
}
