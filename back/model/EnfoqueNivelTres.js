module.exports = (sequelize, type) => {
    return sequelize.define(
      "enfoque_nivel_tres",
      {
        id: {
          type: type.INTEGER,
          primaryKey: true,
        },
        Nombre: type.STRING,
        Nivel_uno: type.STRING,
        Nivel_dos: type.STRING,
        Estado: { type: type.STRING, defaultValue: "Activo" },
      },
      {
        timestamps: false, // Desactiva la funcionalidad de timestamps
        tableName: "enfoque_nivel_tres",
      }
    );
  };
  