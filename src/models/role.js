import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';

class Role extends Sequelize.Model { }

Role.init({
  id: {
    type: Sequelize.INTERGER,
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
  }
}, {
  sequelize,
  modelName: 'role'
});

export default Role