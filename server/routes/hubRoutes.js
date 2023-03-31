const Hubs = require("./../models/hubs");

module.exports = function (app) {
    app.get("/hub", async (req, res) => {
        let allHubs = await Hubs.findAll();
        res.send({hub: allHubs});
      });
  app.post("/hub", async (req, res) => {
    Hubs.create(req.body);
  });

  app.get("/hub/:id", (req, res) => {
    Hubs.findByPk(req.params.id).then((hubs) => {
      res.json(hubs);
    });
  });
};