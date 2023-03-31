const Chainring = require("./../models/chainring");

module.exports = function (app) {
    app.get("/chainring", async (req, res) => {
        let allChainrings = await Chainring.findAll();
        res.send({ chainring: allChainrings});
      });

  app.post("/chainring", async (req, res) => {
    Chainring.create(req.body);
  });

  app.get("/chainring/:id", (req, res) => {
    Chainring.findByPk(req.params.id).then((chainring) => {
      res.json(chainring);
    });
  });
};