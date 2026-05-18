import { query } from "../config/db.js";
import { compare } from "bcryptjs";
import { validationResult } from "express-validator";

export async function login(req, res) {
    try {
        // VALIDATION CHECK
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array(),
                data: []
            });
        }
        const {
            financialYear,
            username,
            password,
        } = req.body;

        // FIND USER
        const userQuery = await query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );

        // USER NOT FOUND
        if (userQuery.rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
                data: []
            });
        }
        const user = userQuery.rows[0];
        console.log("User found:", user);

        // PASSWORD CHECK
        const isMatch = await compare(
            password,
            user.password
        );
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
                data: []
            });
        }
        return res.json({
            success: true,
            message: "Login successful",
            data: {
                id: user.id,
                username: user.username,
                financialYear,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Server error",
            data: []
        });
    }
}