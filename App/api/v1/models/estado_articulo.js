/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estado_articulo', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'estado_articulo'
  });
};
