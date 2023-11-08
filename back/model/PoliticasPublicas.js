module.exports = (sequelize, type) => {
  return sequelize.define(
    "politica_publica",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: type.STRING,
      nemotecnico: type.STRING,
      years: type.INTEGER,
      fecha_inicio: type.DATE,
      fecha_fin: type.DATE,
      sector_lider: type.STRING,
      entidad_lider: type.STRING,
      costo: type.DOUBLE,
      fecha_aprobacion: type.DATE,
      imagen: type.STRING,
      estado: type.STRING,
    },
    {
      timestamps: false, // Desactiva la funcionalidad de timestamps
      tableName: "politica_publica",
    }
  );
};
