const Fork = require("./../models/fork");

module.exports = function (app) {
    app.get("/fork", async (req, res) => {
        let allForks = await Fork.findAll();
        res.send({ fork: allForks});
      });

  app.post("/fork", async (req, res) => {
    Fork.create(req.body);
  });

  app.get("/fork/:id", (req, res) => {
    Fork.findByPk(req.params.id).then((fork) => {
      res.json(fork);
    });
  });
};