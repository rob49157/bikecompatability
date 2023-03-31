const Brakeset = require("./../models/Brakeset");

module.exports = function (app) {
  app.get("/brakeset", async (req, res) => {
    let allBrakesets = await Brakeset.findAll();
    res.send({ brakeset: allBrakesets });
  });

  app.post("/brakeset", async (req, res) => {
    Brakeset.create(req.body);
  });

  app.get("/brakeset/:id", (req, res) => {
    Brakeset.findByPk(req.params.id).then((brakeset) => {
      res.json(brakeset);
    });
  });
};
