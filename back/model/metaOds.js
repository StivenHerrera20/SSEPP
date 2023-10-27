module.exports = (sequelize, type) => {
  return sequelize.define(
    "meta_ods",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombre: type.STRING,
      Descripcion: type.STRING,
      Ods: type.STRING,
      Estado: { type: type.STRING, defaultValue: "Activo" },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "meta_ods",
    }
  );
};
