"use strict"
const express = require('express')
const mysql = require('mysql')
const bodyParser

let app = express();
const PORT = 8080

app.listen(PORT)
console.log("listening on port 8080")
