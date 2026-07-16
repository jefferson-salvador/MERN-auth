import express from "express";
import { signUp, login, updateProfile } from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.put("/profile", authenticate,updateProfile);

export default router;
