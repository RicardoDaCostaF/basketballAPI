const Team = require("../models").Team
module.exports = {
  async getAllTeams(req, res) {
    try {
      const TeamCollection = await Team.findAll({
        order:[
          ['id', 'ASC'],
        ]
      });
      res.status(201).send(TeamCollection)
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },

  async createTeam(req, res) {
    try {
      const TeamCollection = await Team.create({
        teamName: req.body.teamName,
      })
      res.status(201).send(TeamCollection)
    } catch (e) {
      console.log(e)
      res.status(400).send(e)
    }
  },
  
  async update(req, res) {
    try {
      const teamCollection = await Team.findOne({
        id: req.params.teamId,
      })
      if (teamCollection) {
        const updatedTeam = await teamCollection.update({
          teamName: req.body.teamName,
        })
        res.status(201).send(updatedTeam)
      } else {
        res.status(404).send("Team Not Found")
      }
    } catch (e) {
      console.log(e)
      res.status(500).send(e)
    }
  },
}