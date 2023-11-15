module.exports = (sequelize, type) => {
  return sequelize.define(
    "documentos_de_adopcion_politica_publica",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: type.STRING,
      numero: type.STRING,
      year: type.INTEGER,
      nombre: type.STRING,
      documento: type.STRING,
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "documentos_de_adopcion_politica_publica",
    }
  );
};
