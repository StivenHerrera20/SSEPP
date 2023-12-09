const Politica = require("./politicaHasObjetivoEspecifico");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "objetivo_especifico_has_producto_indicador",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: type.STRING,
        allowNull: false,
      },
      formula: {
        type: type.STRING,
        allowNull: false,
      },
      tipo_anulacion: {
        type: type.STRING,
        allowNull: false,
      },
      aplica: {
        type: type.STRING,
        allowNull: false,
      },
      plan_de_desarrollo: {
        type: type.STRING,
        allowNull: true,
      },
      indicador_pdd: {
        type: type.STRING,
        allowNull: true,
      },
      inicio: {
        type: type.DATE,
        allowNull: false,
      },
      fin: {
        type: type.DATE,
        allowNull: false,
      },
      disponible: {
        type: type.STRING,
        allowNull: false,
      },
      disponible: {
        type: type.STRING,
        allowNull: false,
      },
      valor: {
        type: type.INTEGER,
        allowNull: false,
      },
      fecha_base: {
        type: type.DATE,
        allowNull: false,
      },
      fuente: {
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
      ultimoPeriodoRegistrado: {
        type: type.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "objetivo_especifico_has_producto_indicador",
    }
  );
};
