import {DataTypes} from 'sequelize';
import { sequelize } from '../../config/sequelize.js';
import {RolesModel} from './role.js';

const Users = sequelize.define('Users',{
  id: {
  type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, //requerido
    validate: {
        len: [5,15], //min 5 max 15
        is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
      }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 16],
      is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s]+$/,
    },
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "country",
    validate: {
        len: [4,30], //min 5 max 15
        is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
      }
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATEONLY
  },
  updateAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATEONLY,
    onUpdate: DataTypes.DATE
  },
  }, {
    timestamps: false
  })

// 1:M
RolesModel.hasMany(Users, { foreignKey: 'roleId', sourceKey: 'id' });

export class UsersModel extends Users {}