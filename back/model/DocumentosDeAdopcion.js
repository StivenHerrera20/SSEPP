module.exports = (sequelize, type) => {
    return sequelize.define(
      "documentos_de_adopcion",
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
        tableName: "documentos_de_adopcion",
      }
    );
  };
  