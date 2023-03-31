const Tire = require("./../models/tire");

module.exports = function (app) {
  app.get("/tire", async (req, res) => {
    let allTires = await Tire.findAll();
    res.send({ tire: allTires });
  });
  app.post("/tire", async (req, res) => {
    Tire.create(req.body);
  });

  app.get("/tire/:id", (req, res) => {
    Tire.findByPk(req.params.id).then((tire) => {
      res.json(tire);
    });
  });
};
