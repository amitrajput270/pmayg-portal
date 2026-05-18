import { body } from "express-validator";

export const loginValidation = [
    body("financialYear")
        .trim()
        .notEmpty()
        .withMessage("Financial year is required"),

    body("username")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Username must be at least 3 characters")
        .escape(),

    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
];