import { RolesModel } from "../models/role.js";

const checkIfRoleExists = async (role) => {
  const count = await RolesModel.count({
    where: { role },
  });

  return count > 0;
};

const checkIfIdExists = async (id) => {
  const count = await RolesModel.count({ where: { id } });
  return count > 0;
};

const createRole = async (role) => {
  try {
    const { dataValues } = await RolesModel.create({ role });
    return dataValues;
  } catch (err) {
    throw new Error(
      "Error al crear el rol: no se pudo guardar en la base de datos"
    );
  }
};

export { checkIfRoleExists, createRole, checkIfIdExists };
