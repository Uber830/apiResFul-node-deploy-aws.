import {RolesModel} from '../models/role.js';
import {UsersModel} from '../models/users.js';
import {Response} from '../helpers/response.js';

// get all users
const getAllUsers = async (req, res) => {
  const users = await UsersModel.findAll();

  Response.success(res, {users})
};

// get for id user
const getIdUser = async (req, res) => {
  const {id} = req.params;
  const idnum = parseInt(id)

  if(typeof id !== 'number'){
    Response.error(res, 400, {error: 'debe ser un numero'})
  }

  const result = await UsersModel.findOne({where : {
    id: idnum
  }})

  //validate data is null
  
  Response.success(res, {result})
};

//create user
const postUser = (req, res) => {
  const {id} = req.params;
  console.log(id)
};

//update user
const putUser = (req, res) => {
  
};

//update patch user
const patchUser = (req, res) => {
  
};

//delete user
const deleteUser = (req, res) => {
  
};

export { getAllUsers, getIdUser, postUser, putUser, patchUser, deleteUser }