import express from "express";
import {
  signUp,
  login,
  updateProfile,
  getProfile,
  uploadResume,
  getResume,
} from "../controllers/userController.js";
import { authenticate } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/profile", authenticate, getProfile);
router.put("/update-profile", authenticate, updateProfile);
router.post(
  "/resume/upload",
  authenticate,
  (req, res, next) => {
    upload.single("resume")(req, res, (error) => {
      if (error) {
        return res.status(400).json({
          message: error.message,
        });
      }
    });
  },
  uploadResume,
);
router.get("/resume", authenticate, getResume);

export default router;
