const path = require('path');
const express = require('express')

const app = express()

const sequelize =require('./config/connections')

const BottomBracket = require('./models/BottomBracket')
const Brakeset = require('./models/brakeset')
const Frame = require('./models/frame')
const Cassette = require('./models/cassette')
const Chain = require('./models/chain')
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
            name: "Shimano XT ",
            size: "BB-MT800",
            price: 24.99
        },
        {
          name: "CHRIS KING",
          size: "24MM",
          price: 178.00
        }
    ]

    // let frames=[
    //   {
    //     id: 1,
    //     name: "YETI",
    //     model:" SB-140",
    //     price: 4500

    //   },
    //   {
    //     id: 2,
    //     name: "Canyon",
    //     model:"Spectral",
    //     price: 1849

    //   }

    // ]

    // let brakesets =[
    //   {
    //     id: 1,
    //     name: "Shimano",
    //     model:"XT",
    //     price: 170
    //   },
    //   {
    //     id: 2,
    //     name: "Sram ",
    //     model:"Code",
    //     price: 120
    //   }
    // ]

    // let cassettes = [
    //   {
    //     id: 1,
    //     name: "Sram",
    //     model:" XX1 Eagle",
    //     price: 410

    //   },
    //   {
    //     id: 2,
    //     name: "Shimano",
    //     model:"CS-5700",
    //     price: 49
    //   }
    // ]

    // let chains = [
    //   {
    //     id: 1,
    //     name: "Shimano",
    //     model:"XTR",
    //     price: 53
    //   },
    //   {
    //     id: 2,
    //     name: "KMC",
    //     model:"X12",
    //     price: 70
    //   }

    //   ]
  


    // Init data -> save to MySQL
    const bottomBracket = BottomBracket;
    const frame = Frame;
    const brakeset = Brakeset
    const cassette = Cassette
    const chain = Chain

    // for (let i = 0; i < chains.length; i++){
    //   chain.create(chains[i])
    // }

    // for (let i=0; i < cassettes.length; i++){
    //   cassette.create(cassettes[i])
    // }

    for (let i = 0; i < bottomBrackets.length; i++) {
      bottomBracket.create(bottomBrackets[i]);
      // console.log(bottomBrackets[i])
    }

    // for ( let i =0; i <frames.length; i++ ){
    //   frame.create(frames[i])
    // }
    
    // for ( let i =0 ; i < brakesets.length; i++ ){
    //     brakeset.create(brakesets[i])
    //   }
   

}






