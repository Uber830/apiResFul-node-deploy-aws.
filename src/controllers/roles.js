import { RolesModel } from '../models/role.js';
import { Response } from '../helpers/response.js';

// get all roles
const getAllRoles = async (req, res) => {
  try{
    const users = await RolesModel.findAll();

    Response.success(res, users)
  }catch(err){
    Response.error(res, err)
  }
};

//create role
const postRoles = async (req, res) => {
  try{
    const { role } = req.body;
  
   const userOrigin = await RolesModel.findOne({
    where: {
      role
    }
  });
  
  //validar si ese rol ya existe
  if(Object.values(userOrigin.dataValues)[1] === role){
    Response.error(res, 404, 'role existente') 
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
  const userSave = data.dataValues
  console.log(userSave)

  //validar si nos llega data o es un hermoso null
  if(Object.is(userSave, null)){
    console.log('Error en la creacion')
  }else{
   Response.success(res, 'Usuario creado');
  }
  }catch(err){
   Response.error(res, 500, err) 
  }
};

//update role
const putRoles = async (req, res) => {
  const {id} = req.params;
  const {role} = req.params;

  aw
  
  const {dataValues} = await RolesModel.update({role}, {
    where: {
      id
    }
  })

  Response.success(res, 'Usuario actualizado');
};

//delete role
const deleteRoles = async (req, res) => {
  const {id} = req.params;
  const {role} = req.params;

  await RolesModel.destroy({role}, {
    where: {
      id
    }
  })

  Response.custom(res, 204,'Usuario eliminado');
};

export { getAllRoles, postRoles, putRoles, deleteRoles }