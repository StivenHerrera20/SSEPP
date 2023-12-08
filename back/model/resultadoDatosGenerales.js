const Politica = require("./politicaHasObjetivoEspecifico");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "objetivo_especifico_has_resultado_datos_generales",
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
      importancia_relativa: {
        type: type.STRING,
        allowNull: false,
        defaultValue: "0%",
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
      politica: {
        type: type.STRING,
        allowNull: false,
      },
      objetivo: {
        type: type.STRING,
        allowNull: false,
      },
      estado: {
        type: type.STRING,
        allowNull: false,
        defaultValue: "Incompleto",
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "objetivo_especifico_has_resultado_datos_generales",
    }
  );
};
