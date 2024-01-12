const express = require("express");
const {
  create,
  getAll,
  getOne,
  Update,
  deleteUser,
} = require("../controller/UserControllers");
const route = express.Router();

route.post("/create", create);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", Update);
route.delete("/delete/:id", deleteUser);
module.exports = route;
