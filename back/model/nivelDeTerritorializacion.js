module.exports = (sequelize, type) => {
  return sequelize.define(
    "nivel_de_territorializacion",
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
      tableName: "nivel_de_territorializacion",
    }
  );
};
