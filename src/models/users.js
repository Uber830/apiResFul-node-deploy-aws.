import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';
import {RolesModel} from './role.js'

const Users = sequelize.define('Users',{
  id: {
  type: Sequelize.INTEGER,
    autoincrement: true,
    primarikey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false, //requerido
    validate: {
        len: [5,15], //min 5 max 15
        is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
      }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [8, 16],
      is: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\s]+$/,
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  country: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "country",
    validate: {
        len: [4,30], //min 5 max 15
        is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
      }
  },
  roleId: {
    type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: 'id'
    }
  },
  createAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  updateAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    onUpdate: Sequelize.literal('CURRENT_TIMESTAMP')
  },
  }, {
    timestamps: false
  })

// Definimos las relaciones
User.belongsTo(Role,{foreignKey: 'roleId'}); // Una User pertenece a un Role

export class UsersModel extends Users {}