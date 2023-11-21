const Politica = require("./politicaHasObjetivoEspecifico");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "objetivo_especifico_has_producto_datos_generales",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre_resultado: {
        type: type.STRING,
        allowNull: false,
      },
      nombre_producto: {
        type: type.STRING,
        allowNull: false,
      },
      importancia_relativa: {
        type: type.STRING,
        allowNull: false,
      },
      sector_responsable: {
        type: type.STRING,
        allowNull: false,
      },
      entidad_responsable: {
        type: type.STRING,
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
      tableName: "objetivo_especifico_has_producto_datos_generales",
    }
  );
};
