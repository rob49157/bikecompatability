const BottomBracket = require("./../models/BottomBracket");

module.exports = function (app) {
  app.get("/bottomBracket", async (req, res) => {
    let allBottomBrackets = await BottomBracket.findAll();
    res.send({ bottomBracket: allBottomBrackets });
  });

  app.post("/bottomBracket", async (req, res) => {
    BottomBracket.create(req.body);
  });

  app.get("/bottomBracket/:id", (req, res) => {
    BottomBracket.findByPk(req.params.id).then((bottomBracket) => {
      res.json(bottomBracket);
    });
  });
};
