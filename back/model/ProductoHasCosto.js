const Politica = require("./politicaHasObjetivoEspecifico");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "producto_has_costos",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      year: {
        type: type.INTEGER,
        allowNull: false,
      },
      estimado: {
        type: type.INTEGER,
        allowNull: false,
      },
      disponible: {
        type: type.INTEGER,
        allowNull: false,
      },
      id_objetivo: {
        type: type.INTEGER,
        allowNull: false,
        references: {
          model: Politica,
          key: "id",
        },
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "producto_has_costos",
    }
  );
};
