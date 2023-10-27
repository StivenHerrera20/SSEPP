module.exports = (sequelize, type) => {
  return sequelize.define(
    "unidad_de_medida",
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
      tableName: "unidad_de_medida",
    }
  );
};
