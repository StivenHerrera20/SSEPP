const Politica = require("./politicaHasObjetivoEspecifico");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "usuario",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: type.STRING,
        allowNull: false,
      },
      apellidos: {
        type: type.STRING,
        allowNull: false,
      },
      correo: {
        type: type.STRING,
        allowNull: false,
      },
      pass: {
        type: type.STRING,
        allowNull: false,
      },
      activo: {
        type: type.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "usuario",
    }
  );
};
