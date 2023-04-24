import { OrdersModel } from '../models/ordens.js';
import { ProductsModel } from '../models/products.js';
import { RolesModel } from '../models/role.js';
import { UsersModel } from '../models/users.js';
import { handlerError } from '../helpers/handlerError.js';

const getAllProducts = async (req, res) => {
  const result = await Products.findAll({ limit: 100 })

  return handlerError(res, `Products: ${result}`, 200)
};

const getIdProducts = async (req, res) => {
  const { id } = req.params

  const result = await Products.findByPk({ where: { id } });
  return handlerError(res, `Products: ${result}`, 202)
};

const postProducts = (req, res) => {
  //const  = req

  console.log(req.params)
  return res.send('ok')
};

const putProducts = (req, res) => {

};

const patchProducts = (req, res) => {

};

const deleteProducts = (req, res) => {

};

export { getAllProducts, getIdProducts, postProducts, putProducts, patchProducts, deleteProducts }