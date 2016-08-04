'use strict';
module.exports = function(sequelize, DataTypes) {
  var address = sequelize.define('address', {
    temp: DataTypes.STRING,
    permanent: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return address;
};