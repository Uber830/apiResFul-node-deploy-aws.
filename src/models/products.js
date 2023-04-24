import {DataTypes} from 'sequelize';
import { sequelize } from '../../config/sequelize.js';

const Products = sequelize.define('Products',{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, //requerido
    validate: {
      len: [5, 15], //min 5 max 15
      is: /^[a-z0-9]+$/i  //solo caracteres alfanumericos
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Desscription of the products",
    validate: {
      len: [5, 255] //min 5 max 255
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 30] //min 5 max 255
    }
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
}, {
  timestamps: false // Desactivar los timestamps generados automáticamente
})

export class ProductsModel extends Products {}
