import { Router } from "express";
const router = Router();
import { login } from "../controllers/authController.js";
import { loginValidation } from "../validations/authValidation.js";

router.post(
    "/login",
    loginValidation,
    login
);

export default router;