const model = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userHandler = async (data, res) => {
  const response = await model.userModel(data);

  if (response) {
    res.json({ message: "User added successfully", status: "success" });
  } else {
    res.json({ message: "Fail to add user" });
  }
};

const loginHandler = async (data, res) => {
  const response = await model.loginModel(data);
  if (response) {
    const secretKey = "Anonymous";

    const payload = {
      email: response.email,
    };

    const token = jwt.sign(payload, secretKey);

    res.json({
      token,
      response,
      result: "Record addedd successfully",
      success: true,
    });
  } else {
    res.json({ message: "User authentication failed", status: "false" });
  }

  console.log(response);
};

module.exports = { userHandler, loginHandler };
