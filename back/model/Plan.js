module.exports = (sequelize, type) => {
  return sequelize.define(
    "plan_de_desarrollo",
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
      tableName: "plan_de_desarrollo",
    }
  );
};