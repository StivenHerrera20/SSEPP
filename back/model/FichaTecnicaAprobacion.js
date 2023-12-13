module.exports = (sequelize, type) => {
  return sequelize.define(
    "ficha_tecnica_has_aprobacion",
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
      usuario: {
        type: type.STRING,
        allowNull: false,
      },
      estado: {
        type: type.STRING,
        allowNull: false,
      },
      observaciones: {
        type: type.TEXT,
        allowNull: false,
      },
      idIndicador: {
        type: type.INTEGER,
        allowNull: false,
      },
      justificacion: {
        type: type.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "ficha_tecnica_has_aprobacion",
    }
  );
};
