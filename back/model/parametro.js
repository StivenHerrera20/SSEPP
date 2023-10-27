module.exports = (sequelize, type) => {
  return sequelize.define(
    "parametro",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombre: type.STRING,
      Descripcion: type.STRING,
      Valor: type.STRING,
      Estado: { type: type.STRING, defaultValue: "Activo" },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "parametro",
    }
  );
};
