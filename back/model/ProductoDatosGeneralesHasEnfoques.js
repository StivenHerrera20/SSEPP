const Politica = require("./ProductoDatosGenerales");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "resultado_datos_generales_has_enfoques",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      enfoque: {
        type: type.STRING,
        allowNull: false,
      },
      id_resultado_datos_generales: {
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
      tableName: "resultado_datos_generales_has_enfoques",
    }
  );
};
