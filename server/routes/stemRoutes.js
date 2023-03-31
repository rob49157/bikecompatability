const Stem = require("./../models/stem");

module.exports = function (app) {
  app.get("/stem", async (req, res) => {
    let allStems = await Stem.findAll();
    res.send({ stem: allStems });
  });
  app.post("/stem", async (req, res) => {
    Stem.create(req.body);
  });

  app.get("/stem/:id", (req, res) => {
    Stem.findByPk(req.params.id).then((stem) => {
      res.json(stem);
    });
  });
};
