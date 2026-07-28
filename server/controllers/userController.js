import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { promises as fs } from "fs";
import path from "path";

export const signUp = async (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        message: "Username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      username,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error creating user",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(401).json({
      message: "Username and password are required",
    });
  }

  try {
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error logging in",
    });
  }
};

export const updateProfile = async (req, res) => {
  const { name } = req.body;
  const userId = req.user.userId;

  if (!name) {
    return res.status(400).json({
      message: "Name and email are required",
    });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: {
        name: updatedUser.name,
        username: updatedUser.username,
        email: updatedUser.email,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error updating profile",
    });
  }
};

export const getProfile = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      message: "Profile retrieved successfully",
      user: {
        name: user.name,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error retrieving profile",
    });
  }
};

export const uploadResume = async (req, res) => {
  const userId = req.user.userId;

  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Resume is requiredd",
      });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.resumePath) {
      try {
        await fs.unlink(user.resumePath);
      } catch (error) {
        console.error("Error deleting previous resume:", error);
      }
    }

    user.resumePath = req.file.path.replace(/\\/g, "/");

    await user.save();

    return res.status(200).json({
      message: "Resume uploaded successfully",
      user: {
        name: updatedUser.name,
        username: updatedUser.username,
        resumePath: updatedUser.resumePath,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error uploading resume",
    });
  }
};

export const getResume = async (req, res) => {
  const userId = req.user.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!user.resumePath) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    const filePath = path.resolve(user.resumePath);

    return res.download(filePath, `${user.username}-resume.pdf`);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Error downloading resume",
    });
  }
};
