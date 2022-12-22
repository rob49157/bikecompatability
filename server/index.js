const path = require('path');
const express = require('express')

const app = express()

const sequelize =require('./config/connections')

const BottomBracket = require('./models/BottomBracket')
const brakeset = require('./models/brakeset')
const brand = require('./models/brand')
const cassette = require('./models/cassette')
const chain = require('./models/chain')
const chainring = require('./models/chainring')
const crankset = require('./models/crankset')
const fork = require('./models/fork')
const grips = require('./models/grips')
const handlebar = require('./models/handlebar')
const headset = require('./models/headset')
const hubs = require('./models/hubs')
const iscg_tabs = require('./models/iscg_tabs')
const rear_travel = require('./models/rear_travel')
const rotor = require('./models/rotor')
const saddle = require('./models/saddle')
const seatpost = require('./models/seatpost')
const stem = require('./models/stem')
const shifter = require('./models/shifters')
const tire = require('./models/tire')
const warranty= require('./models/warranty')
const wheelset= require('./models/wheelset')

const PORT= process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

// app.use(routes)

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT} `));
    initial();
  });

function initial(){

    let bottomBrackets = [
        {
            name: "bottomBracket1",
            size: 1,
            price: 2.3
        },
        {
          name: "bottomBracket2",
          size: 1,
          price: 23131.25
        }
    ]
  


    // Init data -> save to MySQL
    const bottomBracket = BottomBracket;
    const brand = Brand;


    for (let i = 0; i < bottomBrackets.length; i++) {
      bottomBracket.create(bottomBrackets[i]);
    }
   

}






