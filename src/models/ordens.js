import Sequelize from 'sequelize';
import {sequelize} from '../../config/mysql.js';
import {Products} from '/products.js';
import {User} from '/users.js';

class Orders extends Sequelize.Model {}

Orders.init({
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    primarykey: true
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: 'id'
    } 
  },
  amount: {
   type: Sequelize.INTEGER,
   allowNull: false, 
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'orden'
})

// Definimos las relaciones
Orders.belongsTo(Products); // Una Orders pertenece a un Products
Orders.belongsTo(User); // Una Orders pertenece a un User
User.hasMany(Orders); // Un User puede tener muchas Orders
Products.hasMany(Orders); // Un Products puede tener muchas Orders

export default Ordens