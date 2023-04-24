import {DataTypes} from 'sequelize';
import {sequelize} from '../../config/sequelize.js';
import {ProductsModel} from './products.js';
import {UsersModel} from './users.js';

const Orders = sequelize.define('Orders',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProductsModel,
      key: 'id'
    } 
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: UsersModel,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  createAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATEONLY
  },
  updateAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.DATEONLY,
    onUpdate: DataTypes.DATE
  }
},{
  timestamps: false
})

// Definimos las relaciones
UsersModel.hasMany(Orders); // Un UsersModel puede tener muchas Orders
ProductsModel.hasMany(Orders); // Un ProductsModel puede tener muchas Orders
Orders.belongsTo(ProductsModel); // Una Orders pertenece a un ProductsModel
Orders.belongsTo(UsersModel); // Una Orders pertenece a un UsersModel

export class OrdersModel extends Orders {}