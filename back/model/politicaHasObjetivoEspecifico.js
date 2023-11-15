const PoliticaPublica = require("./PoliticasPublicas");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "politica_publica_has_objetivo_especifico",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      objetivo: {
        type: type.TEXT,
        allowNull: false,
      },
      id_politica: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: PoliticaPublica,
          key: "id",
        },
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "politica_publica_has_objetivo_especifico",
    }
  );
};
