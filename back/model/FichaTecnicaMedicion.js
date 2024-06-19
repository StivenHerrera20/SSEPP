module.exports = (sequelize, type) => {
  return sequelize.define(
    "ficha_tecnica_has_medicion",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      formula: {
        type: type.STRING,
        allowNull: false,
      },
      unidad: {
        type: type.STRING,
        allowNull: false,
      },
      periodicidad: {
        type: type.STRING,
        allowNull: false,
      },
      valor: {
        type: type.STRING,
        allowNull: false,
      },
      fechaBase: {
        type: type.DATE,
        allowNull: false,
      },
      fuenteBase: {
        type: type.STRING,
        allowNull: false,
      },
      fechaBaseInicio: {
        type: type.DATE,
        allowNull: false,
      },
      fechaBaseFin: {
        type: type.DATE,
        allowNull: false,
      },
      territorializacion: {
        type: type.STRING,
        allowNull: false,
      },
      nivelTerritorializacion: {
        type: type.STRING,
        allowNull: true,
      },
      metodologia: {
        type: type.STRING,
        allowNull: false,
      },
      fuentes: {
        type: type.STRING,
        allowNull: false,
      },
      dias_rezago: {
        type: type.INTEGER,
        allowNull: false,
      },
      serie: {
        type: type.INTEGER,
        allowNull: false,
      },
      idObjetivo: {
        type: type.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "ficha_tecnica_has_medicion",
    }
  );
};
