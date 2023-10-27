module.exports = (sequelize, type) => {
  return sequelize.define(
    "rango_semaforo",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
      },
      Nombre: type.STRING,
      Mes: type.STRING,
      Desde: type.INTEGER,
      Hasta: type.INTEGER,
      Color: type.STRING,
      Estado: { type: type.STRING, defaultValue: "Activo" },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "rango_semaforo",
    }
  );
};
