import { RolesModel } from '../models/role.js';
import { Response } from '../helpers/response.js';

// get all roles
const getAllRoles = async (req, res) => {
  const users = await RolesModel.findAll();

  Response.success(res, users)
};

//create role
const postRoles = async (req, res) => {
  const { role } = req.body;

  const userOrigin = await RolesModel.findOne({
    where: {
      role
    }
  });
  const dataUser = userOrigin.dataValues['role']

  //validar si ese rol ya existe
  if(userOrigin.hasOwnProperty('role') && dataUser === role){
     Response.error(res, 404, 'users exists') 
  }

  const { dataValues } = await RolesModel.create({ role });
  const { id } = dataValues;

  //validar si el id existe
  if (typeof dataValues.hasOwnProperty(id) === false) {
    Response.error(res, 400, 'No se esta creando el rol')
  }

  const data = await RolesModel.findOne({
    where: {
      id
    }
  });

  //validar si nos llega data o es un hermoso null
  console.log('validacion final  ' + data)

  Response.success(res, 'Usuario creado');
};

//update role
const putRoles = (req, res) => {

};

//delete role
const deleteRoles = (req, res) => {

};

export { getAllRoles, postRoles, putRoles, deleteRoles }