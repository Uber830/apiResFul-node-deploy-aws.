import { UsersModel } from "../models/users.js";

const checkIfIdExists = async (id) => {
  const count = await UsersModel.count({ where: { id } });
  return count > 0;
};

const consultUser = async (id) => {
  const result = await UsersModel.findOne({ where: { id } });
  return result;
};

export { checkIfIdExists, consultUser };