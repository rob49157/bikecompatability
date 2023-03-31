const BikeBuild = require("./../models/BikeBuild");

module.exports = function (app) {
  app.get("/bikeBuild", async (req, res) => {
    let allBikeBuilds = await BikeBuild.findAll();
    res.send(allBikeBuilds);
  });

  app.post("/bikeBuild", async (req, res) => {
    console.log(req.body)
    BikeBuild.create(req.body)
      .then((response) => {
        res.json(response)
      });
  });

  app.get("/bikeBuild/:id", (req, res) => {
    BikeBuild.findByPk(req.params.id).then((bikeBuild) => {
      res.json(bikeBuild);
    });
  });

  app.delete("/bikeBuild/:id", (req, res) => {
    console.log(req.params.id);
    BikeBuild.destroy({
      where: {
        bikeBuildId: req.params.id,
      },
    })
      .then((deletebike) => {
        res.json(deletebike);
      })
      .catch((err) => res.json(err));
  });
};
