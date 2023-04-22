import Sequelize from 'sequelize';
import {sequelize} from '../../config/mysql.js';
import ProductsModel from './products.js';
import User from './users.js';

const Orders = sequelize.define('Orders',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: ProductsModel,
      key: 'id'
    } 
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
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
},{
  timestamps: false
})

// Definimos las relaciones
Orders.belongsTo(Products); // Una Orders pertenece a un Products
Orders.belongsTo(User); // Una Orders pertenece a un User
User.hasMany(Orders); // Un User puede tener muchas Orders
Products.hasMany(Orders); // Un Products puede tener muchas Orders

export class OrdersModel extends Orders {}