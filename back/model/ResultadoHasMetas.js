const Politica = require("./PoliticasPublicas");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "resultado_has_metas",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      year: {
        type: type.STRING,
        allowNull: false,
      },
      meta: {
        type: type.STRING,
        allowNull: false,
      },
      meta_total: {
        type: type.STRING,
        allowNull: false,
      },
      id_politica: {
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
      tableName: "resultado_has_metas",
    }
  );
};
