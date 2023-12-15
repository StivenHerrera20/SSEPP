module.exports = (sequelize, type) => {
  return sequelize.define(
    "avance_cualitativo",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      fecha: {
        type: type.STRING,
        allowNull: false,
      },
      mes: {
        type: type.STRING,
        allowNull: false,
      },
      year: {
        type: type.STRING,
        allowNull: false,
      },
      analisis_general: {
        type: type.STRING,
        allowNull: false,
      },
      analisis_enfoques: {
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
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "avance_cualitativo",
    }
  );
};
