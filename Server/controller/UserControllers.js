const User = require("../model/UserMOdel");
const { use } = require("../routes/userRoutes");
const create = async (req, res) => {
  try {
    const userData = req.body;

    if (!userData) {
      res.status(404).json({ msg: "user data is not found" });
    }

    const user = await User.create({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });
    res.status(200).json({ user, msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const getAll = async (req, res) => {
  try {
    const allUser = await User.find();

    if (!allUser) {
      res.status(404).json({ msg: "users data not found" });
    }
    res.status(200).json(allUser);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      res.status(400).json({ msg: "users not found" });
    }

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const Update = async (req, res) => {
  try {
    const id = req.params.id;

    const userExist = await User.findById(id);
    if (!userExist) {
      res.status(400).json({ msg: "users not found" });
    }

    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ updateUser, msg: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const userExist = await User.findById(id);
    console.log(userExist);

    if (!userExist) {
      res.status(400).json({ msg: "users not exist" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};

module.exports = {
  create,
  getAll,
  getOne,
  Update,
  deleteUser,
};
