import { UsersModel } from "../models/users.js";
import { Response } from "../helpers/response.js";
import { checkIfIdExists, consultUser } from "../helpers/validationsUsers.js";

// get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await UsersModel.findAll();

    Response.success(res, users);
  } catch (err) {
    Response.error(res, 500, { message: err.message });
  }
};

// get for id user
const getIdUser = async (req, res) => {
  try {
    const { id } = req.params;

    const idExist = await checkIfIdExists(id);

    if (idExist) {
      const result = await consultUser(id);

      Response.success(res, result);
    } else {
      Response.error(res, 404, new Error("id not found. Invalid"));
    }
  } catch (err) {
    Response.error(res, 500, { message: err.message });
  }
};

//create user
const postUser = (req, res) => {
  const { id } = req.params;

};

//update user
const putUser = (req, res) => {};

//update patch user
const patchUser = (req, res) => {};

//delete user
const deleteUser = (req, res) => {};

export { getAllUsers, getIdUser, postUser, putUser, patchUser, deleteUser };
