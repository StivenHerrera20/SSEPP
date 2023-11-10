const PoliticaPublica = require("./PoliticasPublicas");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "politica_has_sectores",
    {
      id_sector: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      sector: {
        type: type.STRING(256),
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
      tableName: "politica_has_sectores",
    }
  );
};
