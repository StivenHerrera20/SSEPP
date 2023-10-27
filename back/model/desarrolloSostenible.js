module.exports = (sequelize, type) => {
  return sequelize.define(
    "objetivos_de_desarrollo_sostenible",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombre: type.STRING,
      Descripcion: type.STRING,
      Estado: { type: type.STRING, defaultValue: "Activo" },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "objetivos_de_desarrollo_sostenible",
    }
  );
};
