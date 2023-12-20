module.exports = (sequelize, type) => {
  return sequelize.define(
    "avance_seguimiento",
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
      avance_periodo: {
        type: type.STRING,
        allowNull: false,
      },
      porcentaje_avance: {
        type: type.STRING,
        allowNull: false,
      },
      porcentaje_acumulado: {
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
      tableName: "avance_seguimiento",
    }
  );
};
