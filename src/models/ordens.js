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
UsersModel.hasMany(Orders ,{foreignKey: 'productId', sourceKey: 'id'}); // Un UsersModel puede tener muchas Orders
ProductsModel.hasMany(Orders, {foreignKey: 'userId', sourceKey: 'id'}); // Un ProductsModel puede tener muchas Orders
Orders.belongsTo(ProductsModel, {foreignKey: 'userId', targetKey: 'id'}); // Una Orders pertenece a un ProductsModel
Orders.belongsTo(UsersModel, {foreignKey: 'productId', targetKey: 'id'}); // Una Orders pertenece a un UsersModel

export class OrdersModel extends Orders {}