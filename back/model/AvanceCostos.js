module.exports = (sequelize, type) => {
  return sequelize.define(
    "avance_costos",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fecha: {
        type: type.DATE,
        allowNull: false,
      },
      periodo: {
        type: type.STRING,
        allowNull: false,
      },
      costo_estimado: {
        type: type.STRING,
        allowNull: false,
      },
      recursos_ejecutados: {
        type: type.STRING,
        allowNull: false,
      },
      recursos_ejecutados_acumulados: {
        type: type.STRING,
        allowNull: false,
      },
      observacion: {
        type: type.STRING,
        allowNull: false,
      },
      idIndicador: {
        type: type.INTEGER,
        allowNull: false,
      },
      idObjetivo: {
        type: type.INTEGER,
        allowNull: false,
      },
      year: {
        type: type.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "avance_costos",
    }
  );
};
