module.exports = (sequelize, DataTypes) => {
    let Player = sequelize.define("Player", {
      playerName: DataTypes.STRING,
    })

    Player.associate = function(models) {
        Player.belongsTo(models.Team, {
          onDelete: "CASCADE",
          foreignKey: "teamId",
      });
    };


    return Player;
  }