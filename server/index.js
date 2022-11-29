const path = require('path');
const express = require('express')

const app = express()

 const sequelize =require('./config/connections')

const PORT= process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

// app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });




// app.listen(PORT, function(err){
//     if (err) console.log("Error in server setup")
//     console.log("Server listening on Port", PORT);
// })



