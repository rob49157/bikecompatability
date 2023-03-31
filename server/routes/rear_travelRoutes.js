const Shock = require("./../models/shock");

module.exports = function (app) {
  app.get("/shock", async (req, res) => {
    let allShocks = await Shock.findAll();
    res.send({ shock: allShocks });
  });
  app.post("/shock", async (req, res) => {
    Shock.create(req.body);
  });

  app.get("/shock/:id", (req, res) => {
    Shock.findByPk(req.params.id).then((shock) => {
      res.json(shock);
    });
  });
};
