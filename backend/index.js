const express = require("express")
const app = express
const port = 8000

app.length("/", (req, res) => {
    res.send("Campeonato de Fifa")
})