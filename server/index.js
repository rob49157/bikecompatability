const path = require("path");
const express = require("express");
const router = require("express").Router();

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
  app.listen(PORT, () => console.log(`http://localhost:${PORT} `));
  initial();
});

// middleware... CORS AUTH
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Content-Type",
    "Authorization"
  );
  next();
});

//  APIROUTES( GET )
function brakes() {
  app.get("/brakes", async (req, res) => {
    let allBrakes = await Brakeset.findAll({});
    res.send({ brakeSets: allBrakes });
  });
}

function bottomBracket() {
  app.get("/bottomBracket", async (req, res) => {
    let allBottomBrackets = await BottomBracket.findAll();
    res.send({ bottomBracket: allBottomBrackets });
  });
}

function cassette() {
  app.get("/cassette/dasdasd", async (req, res) => {
    let allCassetes = await Cassette.findAll();
    res.send({ cassette: allCassetes });
  });
}

function chain() {
  app.get("/chain", async (req, res) => {
    let allChains = await Chain.findAll();
    res.send({ chain: allChains});
  });
}

function chainring() {
  app.get("/chainring", async (req, res) => {
    let allChainrings = await Chainring.findAll();
    res.send({ chainring: allChainrings});
  });
}

function fork() {
  app.get("/fork", async (req, res) => {
    let allForks = await Fork.findAll();
    res.send({ fork: allForks});
  });
}

function frame() {
  app.get("/frame", async (req, res) => {
    let allFrames = await Frame.findAll();
    res.send({frame: allFrames});
  });
}

function grip() {
  app.get("/grip", async (req, res) => {
    let allGrips = await Grips.findAll();
    res.send({grip: allGrips});
  });
}

function handlebar() {
  app.get("/handlebar", async (req, res) => {
    let allHandlebars = await Handlebar.findAll();
    res.send({handlebar: allHandlebars});
  });
}

function headset() {
  app.get("/headset", async (req, res) => {
    let allHeadsets = await Headset.findAll();
    res.send({headset: allHeadsets});
  });
}

function hub() {
  app.get("/hub", async (req, res) => {
    let allHubs = await Hub.findAll();
    res.send({hub: allHubs});
  });
}

function shock() {
  app.get("/shock", async (req, res) => {
    let allShocks = await Shock.findAll();
    res.send({shock: allShocks});
  });
}

function rotor() {
  app.get("/rotor", async (req, res) => {
    let allRotors = await Rotor.findAll();
    res.send({rotor: allRotors});
  });
}

function saddle() {
  app.get("/saddle", async (req, res) => {
    let allSaddles = await Saddle.findAll();
    res.send({saddle: allSaddles});
  });
}

function dropperpost() {
  app.get("/dropperpost", async (req, res) => {
    let allDropperposts = await Dropperpost.findAll();
    res.send({dropperpost: allDropperposts});
  });
}

function shifter() {
  app.get("/shifter", async (req,res)=>{
    let allShifters = await Shifter.findAll();
    res.send({shifters: allShifters})
  })
}

function stem(){
  app.get("/stem", async (req,res)=> {
    let allStems = await Stem.findAll();
    res.send({stems: allStems})
  })
}

function tire(){
  app.get("/tire", async (req,res)=> {
    let allTires = await Tire.findAll();
    res.send({tires: allTires})
  })
}

function wheelset(){
  app.get("/wheelset", async (req,res)=> {
    let allWheelsets = await Wheelset.findAll();
    res.send({wheelsets: allWheelsets})
  })
}



brakes();
bottomBracket();
cassette();
chain();
chainring();
fork();
frame();
grip();
handlebar();
headset();
hub();
shock(); 
rotor();
saddle();
dropperpost();
shifter();
stem();
tire();
wheelset();



// app.get("/", async (req, res) => {
//   let allBrakes = await Brakeset.findAll({});

//   let allBottomBrackets = await BottomBracket.findAll();
//   let allCassetes = await Cassette.findAll();
//   let allChains = await Chain.findAll();
//   let allChainrings = await Chainring.findAll();
//   let allForks = await Fork.findAll();
//   let allFrames = await Frame.findAll();
//   let allGrips = await Grips.findAll();
//   let allHandlebars = await Handlebar.findAll();
//   let allHeadsets = await Headset.findAll();
//   let allHubs = await Hub.findAll();
//   let allShocks = await Shock.findAll();
//   let allRotors = await Rotor.findAll();
//   let allSaddles = await Saddle.findAll();
//   let allDropperposts = await Dropperpost.findAll();
//   let allShifters = await Shifter.findAll();
//   let allStems = await Stem.findAll();
//   let allTires = await Tire.findAll();
//   let allWheelsets = await Wheelset.findAll();

//   res.send({
//     brakeSets: allBrakes,
//     bottomBracket: allBottomBrackets,
//     cassette: allCassetes,
//     chain: allChains,
//     chainring: allChainrings,
//     fork: allForks,
//     frame: allFrames,
//     grip: allGrips,
//     handlebar: allHandlebars,
//     headset: allHeadsets,
//     hub: allHubs,
//     shock: allShocks,
//     rotor: allRotors,
//     saddle: allSaddles,
//     dropperpost: allDropperposts,
//     shifters: allShifters,
//     stems: allStems,
//     tires: allTires,
//     wheelsets: allWheelsets,
//   });
// });

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
      size: "40mm",
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
      model: "High Roller II",
      size: "27.5",
      price: 80,
    },
    {
      name: "Continental",
      model: "Kyptotal",
      size: "29",
      price: 60,
    },
  ];

  let wheelsets = [
    {
      name: "Industry Nine",
      model: "Enduro S Hydra",
      size: "27.5",
      price: 1450,
    },
    {
      name: "Enve",
      model: "M70 Thirty HV",
      size: "29",
      price: 549,
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
  const wheelset = Wheelset;

  //  for( let i = 0; i < wheelsets.length; i++){
  //    wheelset.create(wheelsets[i])
  //  }

  //   for( let i = 0; i < tires.length; i++){
  //    tire.create(tires[i])
  //   }

  //  for( let i = 0; i < stems.length; i++){
  //    Stem.create(stems[i])
  //  }

  //  for( let i = 0; i < shifters.length; i++){
  //    Shifter.create(shifters[i])
  //  }

  //  for( let i = 0; i < dropperposts.length; i++){
  //    dropperpost.create(dropperposts[i]);
  //  }

  //  for( let i = 0; i < saddles.length; i++){
  //    saddle.create(saddles[i])
  //  }

  //  for( let i = 0; i < rotors.length; i++){
  //    rotor.create(rotors[i])
  //  }

  //  for(let i = 0; i < shocks.length; i++){
  //    shock.create(shocks[i])
  //  }

  //  for( let i = 0; i < hubs.length; i++){
  //    hub.create(hubs[i])
  // }

  //  for( let i= 0; i < headsets.length; i++){
  //    headset.create(headsets[i])
  //  }

  //   for(let i = 0; i < handlebars.length; i++){
  //   handlebar.create(handlebars[i])
  //   }

  //  for(let i = 0; i < grips.length; i++){
  //    grip.create(grips[i])
  //  }

  //  for(let i = 0; i < forks.length; i++){
  //     fork.create(forks[i])
  //  }

  //  for (let i = 0; i < chainrings.length; i++) {
  //    chainring.create(chainrings[i]);
  //  }

  //  for (let i = 0; i < chains.length; i++){
  //    chain.create(chains[i])
  //  }

  //  for (let i=0; i < cassettes.length; i++){
  //   cassette.create(cassettes[i])
  //  }

  //  for (let i = 0; i < bottomBrackets.length; i++) {
  //    bottomBracket.create(bottomBrackets[i]);

  //  }

  //  for ( let i =0; i <frames.length; i++ ){
  //    frame.create(frames[i])
  //  }

  //  for ( let i =0 ; i < brakesets.length; i++ ){
  //      brakeset.create(brakesets[i])
  //    }
}
