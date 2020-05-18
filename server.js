const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const aylien = require('aylien_textapi');
let apiData = {};

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
    });

app.get('/api-data', function (req, res) {

        let data = [];
        let formText = document.getElementById('url').value;
        
        textapi.summarize({text: formText},
        
        function(error, response) {
            if (error === null) {
                data.sentences = response.sentences;
                res.send(data);
                console.log(data);
            }
            else {
                console.log("error")
            }
        
        });
        
})

