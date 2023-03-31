const Dropperpost = require("./../models/seatpost");

module.exports = function (app) {
  app.get("/dropperpost", async (req, res) => {
    let allDropperposts = await Dropperpost.findAll();
    res.send({ dropperpost: allDropperposts });
  });
  app.post("/dropperpost", async (req, res) => {
    Dropperpost.create(req.body);
  });

  app.get("/dropperpost/:id", (req, res) => {
    Dropperpost.findByPk(req.params.id).then((dropperpost) => {
      res.json(dropperpost);
    });
  });
};
