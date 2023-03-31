const Rotor = require("./../models/rotor");

module.exports = function (app) {
  app.get("/rotor", async (req, res) => {
    let allRotors = await Rotor.findAll();
    res.send({ rotor: allRotors });
  });
  app.post("/rotor", async (req, res) => {
    Rotor.create(req.body);
  });

  app.get("/rotor/:id", (req, res) => {
    Rotor.findByPk(req.params.id).then((rotor) => {
      res.json(rotor);
    });
  });
};
