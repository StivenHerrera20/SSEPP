module.exports = (sequelize, type) => {
  return sequelize.define(
    "publicacion_politica",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      version: {
        type: type.STRING,
        allowNull: false,
      },
      fecha: {
        type: type.DATE,
        allowNull: false,
      },
      vigencia: {
        type: type.DATE,
        allowNull: false,
      },
      justificacion: {
        type: type.TEXT,
        allowNull: false,
      },
      idPolitica: {
        type: type.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "publicacion_politica",
    }
  );
};
