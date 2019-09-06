/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('numero', {
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ISSN: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    tableName: 'numero'
  });
};
