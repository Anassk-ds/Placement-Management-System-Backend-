import express from "express";
import { login, getMe, changePassword } from "../controllers/authControllers.js";
import { requireAuth } from "../middleware/auth.js";

const router = express.Router();

// POST login
router.post("/login", login);

// GET current logged-in user
router.get("/me", requireAuth, getMe);

// PUT change password
router.put("/change-password", requireAuth, changePassword);

export default router;
