# Climate API

- This API fetches all climate data around the world
# Installation 
 -  You need to have node installed on your computer 
 - After installation run `yarn install` to install the node modules

# Technical specification
 - Node Js
 - Axios
 - Cheerio
 - Nodemon
# Usage
- The API scrapes data from around the web and display all information in JSON format 
- This example shows how we use cheerio to extract data from different websites
- You can also try it out on **[RapidAPI](https://rapidapi.com/clierozigy/api/climate-data1/)**

      ` newspapers.forEach(newspaper => {
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
          })`

# Author
- [Cliff Gor](https://github.com/cliffgor)


