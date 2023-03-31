const Saddle = require("./../models/saddle");

module.exports = function (app) {
  app.get("/saddle", async (req, res) => {
    let allSaddles = await Saddle.findAll();
    res.send({ saddle: allSaddles });
  });
  app.post("/saddle", async (req, res) => {
    Saddle.create(req.body);
  });

  app.get("/saddle/:id", (req, res) => {
    Saddle.findByPk(req.params.id).then((saddle) => {
      res.json(saddle);
    });
  });
};
