const Shifter = require("./../models/shifters");

module.exports = function (app) {
  app.get("/shifter", async (req, res) => {
    let allShifters = await Shifter.findAll();
    res.send({ shifter: allShifters });
  });
  app.post("/shifter", async (req, res) => {
    Shifter.create(req.body);
  });

  app.get("/shifter/:id", (req, res) => {
    Shifter.findByPk(req.params.id).then((shifter) => {
      res.json(shifter);
    });
  });
};
