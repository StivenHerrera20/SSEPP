module.exports = (sequelize, type) => {
  return sequelize.define(
    "ficha_tecnica_has_responsable",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      entidad: {
        type: type.STRING,
        allowNull: false,
      },
      funcionario: {
        type: type.STRING,
        allowNull: false,
      },
      cargo: {
        type: type.STRING,
        allowNull: false,
      },
      dependencia: {
        type: type.STRING,
        allowNull: false,
      },
      roles: {
        type: type.STRING,
        allowNull: false,
      },
      correo: {
        type: type.STRING,
        allowNull: false,
      },
      telefono: {
        type: type.STRING,
        allowNull: false,
      },
      idIndicador: {
        type: type.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "ficha_tecnica_has_responsable",
    }
  );
};
