'use strict';
const { Model } = require('sequelize');
const { v4: uuid } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Client);
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: true,
        defaultValue: uuid,
      },
      roles: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ['ADMIN', 'VENDOR', 'CLIENT'],
        defaultValue: 'CLIENT',
        notEmpty: {
          msg: 'Roles is required',
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        notEmpty: {
          msg: 'Email is required',
        },
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        notEmpty: {
          msg: 'Password is required',
        },
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'User',
    }
  );
  return User;
};
