const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express()

const newspapers = [
    {
        name:'thetimes',
        address:'https://www.thetimes.co.uk/environment/climate-change',
        base:''
    },
    {
        name:'guardian',
        address:'https://www.theguardian.com/environment/climate-crisis',
        base:''
    },
    {
        name:'nationafrica',
        address:'https://nation.africa/kenya',
        base:'https://nation.africa/kenya'
    }
]

const articles = []

newspapers.forEach(newspaper => {
    axios.get(newspaper.address)
        .then(response => {
            const html = response.data
           const $ = cheerio.load(html)

           $('a:contains("climate")', html).each(function () {
               const title = $(this).text()
               const url = $(this).attr('href')


               articles.push({ 
                   title,
                   url: newspaper.base + url,
                   source: newspaper.name
               })
           })
        })
})

app.get('/', (req, res) =>{
    res.json('Welcome to The Climate API')
})

app.get('/news', (req, res) =>{
   res.json(articles)
})

app.get('/news/:newspaperId', async (req, res) => {
    
})

app.listen(PORT, () => console.log(
    `Tunakimbia kama Kipchoge on PORT ${PORT}`
))