const Politica = require("./ProductoHasCosto");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "producto_costos_has_fuentes_seleccionadas",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fuente: {
        type: type.STRING,
        allowNull: false,
      },
      id_producto_has_costo: {
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
      tableName: "producto_costos_has_fuentes_seleccionadas",
    }
  );
};
