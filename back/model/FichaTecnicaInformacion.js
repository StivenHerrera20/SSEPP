module.exports = (sequelize, type) => {
  return sequelize.define(
    "ficha_tecnica_has_informacion",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre_indicador: {
        type: type.STRING,
        allowNull: false,
      },
      politica_asociada: {
        type: type.STRING,
        allowNull: false,
      },
      objetivo_asociado: {
        type: type.STRING,
        allowNull: false,
      },
      resultado: {
        type: type.STRING,
        allowNull: false,
      },
      producto: {
        type: type.STRING,
        allowNull: false,
      },
      sector: {
        type: type.STRING,
        allowNull: false,
      },
      entidad: {
        type: type.STRING,
        allowNull: false,
      },
      pdd: {
        type: type.STRING,
        allowNull: false,
      },
      indicador_pdd: {
        type: type.STRING,
        allowNull: false,
      },
      descripcion: {
        type: type.TEXT,
        allowNull: false,
      },
      aspectos: {
        type: type.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "ficha_tecnica_has_informacion",
    }
  );
};
