import express from "express";
import {
	login,
	logout,
	signup,
	verifyEmail,
	forgotPassword,
	resetPassword,
	checkAuth,
	updateUserProfile,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.put('/profile', verifyToken, updateUserProfile);
router.post("/reset-password/:token", resetPassword);

export default router;
