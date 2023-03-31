const Frame = require("./../models/frame");

module.exports = function (app) {
    app.get("/frame", async (req, res) => {
        let allFrames = await Frame.findAll();
        res.send({frame: allFrames});
      });

  app.post("/frame", async (req, res) => {
    Frame.create(req.body);
  });

  app.get("/frame/:id", (req, res) => {
    Frame.findByPk(req.params.id).then((frame) => {
      res.json(frame);
    });
  });
};