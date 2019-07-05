package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

type passwordGen struct {
	MasterPassword    string `json:"masterPassword"`
	SecondPassword    string `json:"secondPassword"`
	Length            string `json:"length"`
	GeneratedPassword string `json:"generatedPassword"`
}

func generatePassword(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var passwordGen passwordGen
	json.NewDecoder(r.Body).Decode(&passwordGen)
	passwordGen.GeneratedPassword = "test"
	json.NewEncoder(w).Encode(passwordGen)
}

func main() {
	var router = mux.NewRouter()

	router.HandleFunc("/api/generatePassword", generatePassword).Methods("POST")

	log.Fatal(http.ListenAndServe(":5000", router))
}
