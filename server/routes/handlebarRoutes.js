const Handlebar = require("./../models/handlebar");

module.exports = function (app) {
    app.get("/handlebar", async (req, res) => {
        let allHandlebars = await Handlebar.findAll();
        res.send({handlebar: allHandlebars});
      });

  app.post("/handlebar", async (req, res) => {
    Handlebar.create(req.body);
  });

  app.get("/handlebar/:id", (req, res) => {
    Handlebar.findByPk(req.params.id).then((handlebar) => {
      res.json(handlebar);
    });
  });
};