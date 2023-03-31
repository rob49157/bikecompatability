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
const Crankset = require("./models/crankset");
const Fork = require("./models/fork");
const Grips = require("./models/grips");
const Handlebar = require("./models/handlebar");
const Headset = require("./models/headset");
const Hubs = require("./models/hubs");
const Shock = require("./models/shock");
const Rotor = require("./models/rotor");
const Saddle = require("./models/saddle");
const Dropperpost = require("./models/seatpost");
const Stem = require("./models/stem");
const Shifter = require("./models/shifters");
const Tire = require("./models/tire");
const Wheelset = require("./models/wheelset");
const BikeBuild = require("./models/BikeBuild");

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
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Create associations for bikebuild with bike components
BottomBracket.hasMany(BikeBuild, {
  foreignKey: "bottomBracketId",
});
Brakeset.hasMany(BikeBuild, {
  foreignKey: "brakeSetId",
});
Cassette.hasMany(BikeBuild, {
  foreignKey: "cassetteId",
});
Chain.hasMany(BikeBuild, {
  foreignKey: "chainId",
});
Chainring.hasMany(BikeBuild, {
  foreignKey: "chainRingId",
});
Crankset.hasMany(BikeBuild, {
  foreignKey: "cranksetId",
});
Fork.hasMany(BikeBuild, {
  foreignKey: "forkId",
});
Frame.hasMany(BikeBuild, {
  foreignKey: "frameId",
});
Grips.hasMany(BikeBuild, {
  foreignKey: "gripsId",
});
Handlebar.hasMany(BikeBuild, {
  foreignKey: "handlebarId",
});
Headset.hasMany(BikeBuild, {
  foreignKey: "headsetId",
});
Hubs.hasMany(BikeBuild, {
  foreignKey: "hubsId",
});
Rotor.hasMany(BikeBuild, {
  foreignKey: "rotorId",
});
Saddle.hasMany(BikeBuild, {
  foreignKey: "saddleId",
});
Dropperpost.hasMany(BikeBuild, {
  foreignKey: "dropperPostId",
});
Shifter.hasMany(BikeBuild, {
  foreignKey: "shifterId",
});
Shock.hasMany(BikeBuild, {
  foreignKey: "shockId",
});
Stem.hasMany(BikeBuild, {
  foreignKey: "stemId",
});
Tire.hasMany(BikeBuild, {
  foreignKey: "tireId",
});
Wheelset.hasMany(BikeBuild, {
  foreignKey: "wheelsetId",
});

// BikeBuild routes
require("./routes/bikeBuildRoutes.js")(app);
require("./routes/bottomBracketRoutes.js")(app);
require("./routes/brakesetRoutes.js")(app);
require("./routes/cassetteRoutes.js")(app);
require("./routes/chainringRoutes.js")(app);
require("./routes/chainRoutes.js")(app);
require("./routes/forkRoutes.js")(app);
require("./routes/cranksetRoutes.js")(app);
require("./routes/frameRoutes.js")(app);
require("./routes/gripRoutes.js")(app);
require("./routes/handlebarRoutes.js")(app);
require("./routes/headsetRoutes.js")(app);
require("./routes/hubRoutes.js")(app);
require("./routes/rotorRoutes.js")(app);
require("./routes/saddleRoutes.js")(app);
require("./routes/seatpostRoutes.js")(app);
require("./routes/shifterRoutes.js")(app);
require("./routes/stemRoutes.js")(app);
require("./routes/tireRoutes.js")(app);
require("./routes/wheelsetRoutes.js")(app);

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

  let cranksets = [
    {
      name: "CranksetName1",
      model: "CranksetModel1",
      price: 53,
    },
    {
      name: "CranksetName2",
      model: "CranksetModel2",
      price: 70,
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

  // for (let i = 0; i < wheelsets.length; i++) {
  //   Wheelset.create(wheelsets[i]);
  // }

  // for (let i = 0; i < tires.length; i++) {
  //   Tire.create(tires[i]);
  // }

  // for (let i = 0; i < stems.length; i++) {
  //   Stem.create(stems[i]);
  // }

  // for (let i = 0; i < shifters.length; i++) {
  //   Shifter.create(shifters[i]);
  // }

  // for (let i = 0; i < dropperposts.length; i++) {
  //   Dropperpost.create(dropperposts[i]);
  // }

  // for (let i = 0; i < saddles.length; i++) {
  //   Saddle.create(saddles[i]);
  // }

  // for (let i = 0; i < rotors.length; i++) {
  //   Rotor.create(rotors[i]);
  // }

  // for (let i = 0; i < shocks.length; i++) {
  //   Shock.create(shocks[i]);
  // }

  // for (let i = 0; i < hubs.length; i++) {
  //   Hubs.create(hubs[i]);
  // }

  // for (let i = 0; i < headsets.length; i++) {
  //   Headset.create(headsets[i]);
  // }

  // for (let i = 0; i < handlebars.length; i++) {
  //   Handlebar.create(handlebars[i]);
  // }

  // for (let i = 0; i < grips.length; i++) {
  //   Grips.create(grips[i]);
  // }

  // for (let i = 0; i < forks.length; i++) {
  //   Fork.create(forks[i]);
  // }

  // for (let i = 0; i < chainrings.length; i++) {
  //   Chainring.create(chainrings[i]);
  // }

  // for (let i = 0; i < chains.length; i++) {
  //   Chain.create(chains[i]);
  // }

  // for (let i = 0; i < cranksets.length; i++) {
  //   Crankset.create(cranksets[i]);
  // }

  // for (let i = 0; i < cassettes.length; i++) {
  //   Cassette.create(cassettes[i]);
  // }

  // for (let i = 0; i < bottomBrackets.length; i++) {
  //   BottomBracket.create(bottomBrackets[i]);
  // }

  // for (let i = 0; i < frames.length; i++) {
  //   Frame.create(frames[i]);
  // }

  // for (let i = 0; i < brakesets.length; i++) {
  //   Brakeset.create(brakesets[i]);
  // }
}
