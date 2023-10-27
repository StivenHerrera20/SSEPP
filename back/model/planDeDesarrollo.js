module.exports = (sequelize, type) => {
  return sequelize.define(
    "indicador_plan_de_desarrollo_municipal",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombre: type.STRING,
      Descripcion: type.STRING,
      Sector: type.STRING,
      Plan_de_desarrollo: type.STRING,
      Estado: { type: type.STRING, defaultValue: "Activo" },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "indicador_plan_de_desarrollo_municipal",
    }
  );
};
