module.exports = (sequelize, type) => {
  return sequelize.define(
    "fuentes_de_financiacion",
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
      tableName: "fuentes_de_financiacion",
    }
  );
};
