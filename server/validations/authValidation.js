import { body } from "express-validator";

export const loginValidation = [
    // FINANCIAL YEAR
    body("financialYear")
        .trim()
        .notEmpty()
        .withMessage("Financial year is required")
        .bail()
        .matches(/^\d{4}-\d{4}$/)
        .withMessage(
            "Financial year must be in format YYYY-YYYY"
        )
        .bail()
        .custom((value) => {
            const [startYear, endYear] =
                value.split("-").map(Number);
            if (endYear !== startYear + 1) {
                throw new Error(
                    "Financial year must be consecutive years (e.g. 2024-2025)"
                );
            }
            return true;
        }),

    // USERNAME
    body("userName")
        .trim()
        .notEmpty()
        .withMessage("Username is required")
        .bail()
        .isLength({ min: 3, max: 50 })
        .withMessage(
            "Username must be between 3 and 50 characters"
        )
        .bail()
        .escape(),

    // PASSWORD
    body("password")
        .trim()
        .notEmpty()
        .withMessage("Password is required")
        .bail()
        .isLength({ min: 6, max: 20 })
        .withMessage(
            "Password must be between 6 and 20 characters"
        ),
];