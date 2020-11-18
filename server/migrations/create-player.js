module.exports = {
    up: (queryInterface, Sequelize) =>
      queryInterface.createTable("Players", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        playerName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        teamId: {
          type: Sequelize.INTEGER,
          onDelete: "CASCADE",
          references: {
            model: "Teams",
            key: "id",
            as: "teamId",
          },
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      }),
    down: (queryInterface /* , Sequelize */) => queryInterface.dropTable("Players"),
  }