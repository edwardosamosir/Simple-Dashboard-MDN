'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/passwordHasher")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Email is already used, please use another email!",
      },
      validate: {
        notNull: { msg: "Email is required!" },
        notEmpty: { msg: "Email is required!" },
        isEmail: { msg: "Email format is not valid!" }
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Mobile phone number is already used, please use another phone number!",
      },
      validate: {
        notNull: { msg: "Mobile phone number is required!" },
        notEmpty: { msg: "Mobile phone number is required!" }
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: "Password is required!" },
        notEmpty: { msg: "Password is required!" },
        len: {
          args: [5],
          msg: "Password length min are 5 characters!",
        },
      },
    },
    type: DataTypes.INTEGER,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'm_users',
    hooks: {
      beforeCreate(instance) {
        instance.password = hashPassword(instance.password)
      },
    },
  });
  return User;
};