module.exports = (sequelize, type) => {
  return sequelize.define(
    "documentos_asociados_politica_publica",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      tipo_documento: type.STRING,
      documento: type.STRING,
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "documentos_asociados_politica_publica",
    }
  );
};
