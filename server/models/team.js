module.exports = (sequelize, DataTypes) => {
    let Team = sequelize.define("Team", {
      teamName: DataTypes.STRING,
    })

    Team.associate = function(models) {
        Team.hasMany(models.Player, {
        foreignKey: "teamId",
        as: "teams",
      });
    };


    return Team;
  }