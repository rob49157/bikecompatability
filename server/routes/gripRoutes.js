const Grips = require("./../models/grips");

module.exports = function (app) {
    app.get("/grip", async (req, res) => {
        let allGrips = await Grips.findAll();
        res.send({grip: allGrips});
      });

  app.post("/grip", async (req, res) => {
    Grips.create(req.body);
  });

  app.get("/grip/:id", (req, res) => {
    Grips.findByPk(req.params.id).then((grips) => {
      res.json(grips);
    });
  });
};