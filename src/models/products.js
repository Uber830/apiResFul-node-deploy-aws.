import Sequelize from 'sequelize';
import { sequelize } from '../../config/mysql.js';

const Products = sequelize.define('Products',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false, //requerido
    validate: {
      len: [5, 15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: "Desscription of the products",
    validate: {
      len: [5, 255] //min 5 max 255
    }
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [4, 30] //min 5 max 255
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
  timestamps: false // Desactivar los timestamps generados automáticamente
})

export class ProductsModel extends Products {}
