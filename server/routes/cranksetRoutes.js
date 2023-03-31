const crankset = require("./../models/crankset");

module.exports = function (app) {
    app.get("/crankset", async (req, res) => {
        let allCrankset = await crankset.findAll();
        res.send({ crankset: allCrankset});
      });

  app.post("/crankset", async (req, res) => {
    crankset.create(req.body);
  });

  app.get("/crankset/:id", (req, res) => {
    crankset.findByPk(req.params.id).then((Crankset) => {
      res.json(Crankset);
    });
  });
};