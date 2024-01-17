const database = require("../config/database");
const userMongooseModel = require("../schema/userMongooseModel");

const userModel = async (data) => {
  await database();
  const newUser = new userMongooseModel(data);

  try {
    const res = await newUser.save();
    return res;
  } catch (error) {
    return error;
  }
};

const loginModel = async (data) => {
  const { email, password } = data;
  await database();
  const response = await userMongooseModel.findOne({ email, password });
  return response;
};

module.exports = { userModel, loginModel };
