module.exports = (sequelize, type) => {
    return sequelize.define(
      "entidad",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
        },
        Nombre: type.STRING,
        Descripcion: type.STRING,
        Sector: type.STRING,
        Estado: { type: type.STRING, defaultValue: "Activo" },
      },
      {
        timestamps: false, // Desactiva la funcionalidad de timestamps
        tableName: "entidad",
      }
    );
  };
  