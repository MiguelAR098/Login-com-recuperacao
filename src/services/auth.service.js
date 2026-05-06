const { createUser, findByEmail } = require("../repositories/user.repository");
const { hashPassword, comparePassword } = require("../utils/hash");
const { generateToken } = require("../utils/token");

const register = async ({ name, email, password }) => {
  const existing = await findByEmail(email);
  if (existing) {
    throw new Error("User already exists");
  }

  const hashed = await hashPassword(password);

  const user = await createUser({
    name,
    email,
    password: hashed,
  });

  return user;
};

const login = async ({ email, password }) => {
  const user = await findByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValid = await comparePassword(password, user.password);
  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ id: user._id });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    token,
  };
};

module.exports = { register, login };