# Password Generator

This is a simple web-based password generator. The app produces a hashed password based on user input. It uses hmac sha-512 as the hashing algorithm.

The idea originates from one-password. I find it a bit overwhelming to remember passwords for each website, so I want an app that uses a primary key plus the domain name to generate a dynamic password for each domain. I implemented a react-based web app and a Golang-based API server.

Microsoft, Google, and Apple have provided their password management tools, rendering the one-password app obsolete -- as long as you trust these tech giants.
