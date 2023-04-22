import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';

const Roles = sequelize.define('Roles',{
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primarikey: true
  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [5,15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
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
  }
}, {
  timestamps: false
});

export class RolesModel extends Roles {}