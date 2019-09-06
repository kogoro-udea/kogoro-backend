/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autor_por_articulo', {
    articulo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'articulo',
        key: 'id'
      }
    },
    autor_tipo_documento: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'autor',
        key: 'tipo_documento'
      }
    },
    autor_numero_documento: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'autor',
        key: 'numero_documento'
      }
    }
  }, {
    tableName: 'autor_por_articulo'
  });
};
