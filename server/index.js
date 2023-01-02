const path = require("path");
const express = require("express");

const app = express();

const sequelize = require("./config/connections");

const BottomBracket = require("./models/BottomBracket");
const Brakeset = require("./models/brakeset");
const Frame = require("./models/frame");
const Cassette = require("./models/cassette");
const Chain = require("./models/chain");
const Chainring = require("./models/chainring");
const crankset = require("./models/crankset");
const Fork = require("./models/fork");
const Grips = require("./models/grips");
const Handlebar = require("./models/handlebar");
const Headset = require("./models/headset");
const Hub = require("./models/hubs");
const Shock = require("./models/rear_travel");
const Rotor = require("./models/rotor");
const Saddle = require("./models/saddle");
const Dropperpost = require("./models/seatpost");
const Stem = require("./models/stem");
const Shifter = require("./models/shifters");
const Tire = require("./models/tire");
const Wheelset = require("./models/wheelset");

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT} `));
  initial();
});

function initial() {
  let bottomBrackets = [
    {
      name: "Shimano XT ",
      size: "BB-MT800",
      price: 24.99,
    },
    {
      name: "CHRIS KING",
      size: "24MM",
      price: 178.0,
    },
  ];

  let frames = [
    {
      name: "YETI",
      model: " SB-140",
      price: 4500,
    },
    {
      name: "Canyon",
      model: "Spectral",
      price: 1849,
    },
  ];

  let brakesets = [
    {
      name: "Shimano",
      model: "XT",
      price: 170,
    },
    {
      name: "Sram ",
      model: "Code",
      price: 120,
    },
  ];

  let cassettes = [
    {
      name: "Sram",
      model: " XX1 Eagle",
      price: 410,
    },
    {
      name: "Shimano",
      model: "CS-5700",
      price: 49,
    },
  ];

  let chains = [
    {
      name: "Shimano",
      model: "XTR",
      price: 53,
    },
    {
      name: "KMC",
      model: "X12",
      price: 70,
    },
  ];

  let chainrings = [
    {
      name: "Shimano",
      model: "Ultegra",
      price: 314,
    },
    {
      name: "Race Face",
      model: "Cinch",
      price: 49,
    },
  ];

  let forks = [
    {
      name: "Fox",
      model: "Factory 38",
      travel: "180mm",
      price: 1078,
    },
    {
      name: "Rockshock",
      model: "Pike",
      travel: "150mm",
      price: 499,
    },
  ];

  let grips = [
    {
      name: "OneUp",
      model: "Lock On",
      price: 25,
    },
    {
      name: "Race Face",
      model: "Getta",
      price: 16,
    },
  ];

  let handlebars = [
    {
      name: "PNW",
      model: "Range",
      price: 56,
    },
    {
      name: "OneUp",
      model: "Carbon",
      price: 150,
    },
  ];

  let headsets = [
    {
      name: "WOLF",
      model: "EC34",
      price: 45,
    },
    {
      name: "Ritchey Logic",
      model: "Headset-Black",
      price: 45,
    },
  ];

  let hubs = [
    {
      name: "Industry Nine",
      model: "Hydra",
      price: 38,
    },

    {
      name: "Shinamo",
      model: "Pro 2 EVO ",
      price: 240,
    },
  ];

  let shocks = [
    {
      name: "Fox Float X2",
      travel: "89mm",
      price: 699,
    },
    {
      name: "RockShox Monarch",
      travel: "63mm",
      price: 179,
    },
  ];

  let rotors = [
    {
      name: "Shimano",
      size: "89mm",
      price: 33,
    },
    {
      name: "SRAM",
      size: "180mm",
      price: 21,
    },
  ];

  let saddles = [
    {
      name: "SMP",

      price: 57,
    },
    {
      name: "Brooks",

      price: 90,
    },
  ];
  let dropperposts = [
    {
      name: "Loam",
      travel: "125mm",
      price: 125,
    },
    {
      name: "PNW",
      travel: "200mm",
      price: 99,
    },
  ];

  let shifters = [
    {
      name: "Shiimano Deore",

      price: 31,
    },
    {
      name: "Sram Eagle",

      price: 40,
    },
  ];

  let stems = [
    {
      name: "Race Face",
      size:"40mm",
      price: 31,
    },
    {
      name: "PNW",
      size: "31.8mm",
      price: 40,
    },
  ];

  let Tire = [
    {
      name: " Maxxis",
      size:"40mm",
      price: 31,
    },
    {
      name: "PNW",
      size: "31.8mm",
      price: 40,
    },
  ];
  let tires = [
    {
      name: "Maxxis",
      model:"High Roller II",
      size:"27.5",
      price: 80,
    },
    {
      name: "Continental",
      model:"Kyptotal",
      size: "29",
      price: 60,
    },
  ];
  // Init data -> save to MySQL
  const bottomBracket = BottomBracket;
  const frame = Frame;
  const brakeset = Brakeset;
  const cassette = Cassette;
  const chain = Chain;
  const chainring = Chainring;
  const fork = Fork;
  const grip = Grips;
  const handlebar = Handlebar;
  const headset = Headset;
  const hub = Hub;
  const shock = Shock;
  const rotor = Rotor;
  const saddle = Saddle;
  const dropperpost = Dropperpost;
  const tire = Tire;
  
  
   for( let i = 0; i < tires.length; i++){
     tire.create(tires[i])
   }

  // for( let i = 0; i < stems.length; i++){
  //   Stem.create(stems[i])
  // }

  // for( let i = 0; i < shifters.length; i++){
  //   Shifter.create(shifters[i])
  // }

  // for( let i = 0; i < dropperposts.length; i++){
  //   dropperpost.create(dropperposts[i]);
  // }

  // for( let i = 0; i < saddles.length; i++){
  //   saddle.create(saddles[i])
  // }

  // for( let i = 0; i < rotors.length; i++){
  //   rotor.create(rotors[i])
  // }

  // for(let i = 0; i < shocks.length; i++){
  //   shock.create(shocks[i])
  // }

  // for( let i = 0; i < hubs.length; i++){
  //   hub.create(hubs[i])
  // }

  // for( let i= 0; i < headsets.length; i++){
  //   headset.create(headsets[i])
  // }

  //  for(let i = 0; i < handlebars.length; i++){
  //  handlebar.create(handlebars[i])
  //  }

  // for(let i = 0; i < grips.length; i++){
  //   grip.create(grips[i])
  // }

  // for(let i = 0; i < forks.length; i++){
  //    fork.create(forks[i])
  // }

  // for (let i = 0; i < chainrings.length; i++) {
  //   chainring.create(chainrings[i]);
  // }

  // for (let i = 0; i < chains.length; i++){
  //   chain.create(chains[i])
  // }

  // for (let i=0; i < cassettes.length; i++){
  //   cassette.create(cassettes[i])
  // }

  // for (let i = 0; i < bottomBrackets.length; i++) {
  //   bottomBracket.create(bottomBrackets[i]);

  // }

  // for ( let i =0; i <frames.length; i++ ){
  //   frame.create(frames[i])
  // }

  // for ( let i =0 ; i < brakesets.length; i++ ){
  //     brakeset.create(brakesets[i])
  //   }
}
