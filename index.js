const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express()

app.get('/', (req, res) =>{
    res.json('Welcome to The Climate API')
})

app.listen(PORT, () => console.log(
    `Tunakimbia kama Kipchoge on PORT ${PORT}`
))