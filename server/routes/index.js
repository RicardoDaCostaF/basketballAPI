//index.js
const teamController = require("../controller").team
const playerController = require("../controller").player
module.exports = app => {
  app.get("/api", (req, res) => {
    res.status(200).send({
      data: "Welcome Node Sequlize API v1",
    })
  })
  app.get("/api/teams", teamController.getAllTeams);
  app.post("/api/team/create", teamController.createTeam);
  app.patch("/api/team/:teamId", teamController.update);
  app.get("/api/:teamId/players", playerController.getAllPlayersOfTeam);
  app.post("/api/player/create", playerController.createPlayer);
  app.put("/api/player/:playerId", playerController.update);
  app.delete("/api/player/:playerId", playerController.remove);
}