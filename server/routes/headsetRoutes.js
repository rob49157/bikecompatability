const Headset = require("./../models/headset");

module.exports = function (app) {
    app.get("/headset", async (req, res) => {
        let allHeadsets = await Headset.findAll();
        res.send({headset: allHeadsets});
      });
  app.post("/headset", async (req, res) => {
    Headset.create(req.body);
  });

  app.get("/headset/:id", (req, res) => {
    Headset.findByPk(req.params.id).then((headset) => {
      res.json(headset);
    });
  });
};