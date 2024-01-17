const express = require("express");
const cors = require("cors");
const userController = require("./controllers/userController");
const eventController = require("./controllers/eventController");
const app = express();
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());

function validateToken(req, res, next) {
  const secretKey = "Anonymous";
  const token = req.headers.authorization;
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    } else {
      console.log("Your token is valid");
      next();
    }
  });
}

app.get("/", (req, res) => {
  res.send("<h1>Node server running</h1>");
});

app.post("/signup", (req, res) => {
  const data = req.body;
  userController.userHandler(data, res);
});

app.post("/login", (req, res) => {
  const data = req.body;
  userController.loginHandler(data, res);
});

app.post("/event", validateToken, (req, res) => {
  const data = req.body;
  eventController.eventAdd(data, res);
});

app.listen(5000);
