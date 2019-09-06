/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autor', {
    tipo_documento: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    numero_documento: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    usuario_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'autor'
  });
};
