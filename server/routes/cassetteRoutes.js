const Cassette = require("./../models/cassette");

module.exports = function (app) {
    app.get("/cassette", async (req, res) => {
        let allCassetes = await Cassette.findAll();
        res.send({ cassette: allCassetes });
      });

  app.post("/cassette", async (req, res) => {
    Cassette.create(req.body);
  });

  app.get("/cassette/:id", (req, res) => {
    Cassette.findByPk(req.params.id).then((cassette) => {
      res.json(cassette);
    });
  });
};
