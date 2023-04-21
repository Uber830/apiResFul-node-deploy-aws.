import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';

class Products extends Sequelize.Model { }

Products.init({
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primarykey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false, //requerido
    validate: {
      len: [5,15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true, 
    validate: {
      len: [5, 255] //min 5 max 255
    }
  }
}, {
  sequelize,
  modelName: 'product'
})

export default Products