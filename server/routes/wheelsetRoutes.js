const Wheelset = require("./../models/wheelset");

module.exports = function (app) {
  app.get("/wheelset", async (req, res) => {
    let allWheelsets = await Wheelset.findAll();
    res.send({ wheelset: allWheelsets });
  });
  app.post("/wheelset", async (req, res) => {
    Wheelset.create(req.body);
  });

  app.get("/wheelset/:id", (req, res) => {
    Wheelset.findByPk(req.params.id).then((wheelset) => {
      res.json(wheelset);
    });
  });
};
