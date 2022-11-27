const express = require('express')

const https = require('https')
const app = express()
const PORT = 3001


app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})



