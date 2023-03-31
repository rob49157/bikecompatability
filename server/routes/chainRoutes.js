const Chain = require("./../models/chain");

module.exports = function (app) {
    app.get("/chain", async (req, res) => {
        let allChains = await Chain.findAll();
        res.send({ chain: allChains});
      });

  app.post("/chain", async (req, res) => {
    Chain.create(req.body);
  });

  app.get("/chain/:id", (req, res) => {
    Chain.findByPk(req.params.id).then((chain) => {
      res.json(chain);
    });
  });
};