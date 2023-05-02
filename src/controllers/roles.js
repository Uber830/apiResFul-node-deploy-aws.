import { RolesModel } from "../models/role.js";
import { Response } from "../helpers/response.js";
import {
  checkIfIdExists,
  checkIfRoleExists,
  createRole,
} from "../helpers/validationsRoles.js";

// get all roles
const getAllRoles = async (req, res) => {
  try {
    const users = await RolesModel.findAll();

    Response.success(res, users);
  } catch (err) {
    Response.error(res, err);
  }
};

//create role
const postRoles = async (req, res) => {
  try {
    const { role } = req.body;

    //validar si el id existe
    const rolesExist = await checkIfRoleExists(role);

    if (rolesExist) {
      Response.custom(res, 409, "The role yes exist");
      return;
    }

    await createRole(role);

    Response.success(res, "Role created successfully");
  } catch (err) {
    Response.error(res, 500, { message: err.message });
  }
};

//update role
const putRoles = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const [rowsAffected] = await RolesModel.update(
      { role },
      {
        where: { id },
      }
    );

    rowsAffected > 0
      ? Response.success(res, "Rol actualizado")
      : Response.error(res, 404, new Error("No se encontro el usuario"));
  } catch (err) {
    Response.error(res, 500, { message: err.message });
  }
};

//delete role
const deleteRoles = async (req, res) => {
  try {
    const { id } = req.params;

    const idExist = await checkIfIdExists(id);

    if (idExist) {
      await RolesModel.destroy({
        where: {
          id,
        },
      });

      Response.delete(res, 202);
    } else {
      Response.error(res, 404, new Error("Role does not exist"));
    }
  } catch (err) {
    Response.error(res, 500, { message: err.message });
  }
};

export { getAllRoles, postRoles, putRoles, deleteRoles };