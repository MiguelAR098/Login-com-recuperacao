const User = require("../models/user.model");

const createUser = (data) => User.create(data);
const findByEmail = (email) => User.findOne({ email });

module.exports = { createUser, findByEmail };