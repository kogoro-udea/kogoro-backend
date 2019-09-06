/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_usuario', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tipo_usuario'
  });
};
