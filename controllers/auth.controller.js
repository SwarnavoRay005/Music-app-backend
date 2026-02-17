import User from "../models/user.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { username, email, password, role = "user" } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ message: "all fields are required to be filled" });
  }

  const isUserExists = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserExists) {
    res.status(409).json({ message: "User already exists" });
  }

  //Hashing the password:
  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hash,
    role,
  });

  //creating a token:
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
  );

  //Storing the token in a cookie:
  res.cookie("token", token);

  res.status(200).json({ message: "User registered successfully", user });
};

export const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    res.status(401).json({ message: "Invalid credentials" });
  }

  //creating a token after successful login:
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET_KEY,
  );

  //Storing the token in a cookie:
  res.cookie("token", token);

  res.status(200).json({ message: "User logged in successfully", user });
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token");

  res.status(200).json({ message: "User logged out successfully" });
};
