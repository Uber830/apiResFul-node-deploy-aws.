import {DataTypes} from 'sequelize';
import { sequelize } from '../../config/sequelize.js';

const Roles = sequelize.define('Roles',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5,15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
  }
}, {
  timestamps: true
});

export class RolesModel extends Roles {}