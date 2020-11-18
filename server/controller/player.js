
const Team = require("../models").Team
const Player = require("../models").Player
module.exports = {

  async getAllPlayersOfTeam(req, res) {
    try {
      const teamCollection = await Team.findAll({
        id: req.params.teamId,
      })
      if (teamCollection) {
        const playerCollection = await Player.findOne({
            teamId: req.params.teamId,
        })
        res.status(201).send(playerCollection)
      } else {
        re.status(404).send("User Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },

  async createPlayer(req, res) {
    try {
      const player = await Player.create({
        playerName: req.body.playerName,
        teamId: req.body.teamId,
      })
      res.status(201).send(player)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  async update(req, res) {
    try {
      const playerCollection = await Player.findOne({
        where:{
          id: req.params.playerId
        }
      })
      if (playerCollection) {
        const updatePlayer = await Player.update({
          playerName: req.body.playerName},
          { 
            where : {
              id: req.params.playerId
            }
          }
        )
        res.status(201).send(updatePlayer)
      } else {
        res.status(404).send("Player Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

  async remove(req, res) {
    try {
      const playerCollection = await Player.findOne({
        where: {
          id: req.params.playerId,
          teamId: req.body.teamId,
       }
      })
      if (playerCollection) {
        const removePlayer = await Player.destroy({
          where: {
            id: req.params.playerId,
            teamId: req.body.teamId,
         },
         truncate: false,
        })
        res.status(201).send(removePlayer)
      } else {
        res.status(404).send("Player Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },

}