/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('articulo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    resumen: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'estado_articulo',
        key: 'id'
      }
    },
    url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    tableName: 'articulo'
  });
};
