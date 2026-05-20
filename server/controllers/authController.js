import { query } from "../config/db.js";
import { compare } from "bcryptjs";
import { validationResult } from "express-validator";
import responseHelper from "../helper/responseHelper.js";
import sanitizeInput from "../utils/sanitize.js";

export const login = async (req, res) => {
    try {
        /**
         * VALIDATION CHECK
         */
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return responseHelper.validationError(res, errors);
        }

        /**
         * REQUEST BODY
         */
        const {
            financialYear,
            userName,
            password,
        } = req.body;

        const cleanUserName = sanitizeInput(userName);

        /**
         * FIND USER
         */
        const result = await query(
            `
            SELECT
                id,
                username,
                password
            FROM users
            WHERE username = $1
            LIMIT 1
            `,
            [cleanUserName]
        );

        /**
         * USER NOT FOUND
         */
        if (result.rows.length === 0) {
            return responseHelper.validationError(
                res,
                {
                    userName: "Invalid username or password",
                },
                "Authentication failed"
            );
        }
        const user = result.rows[0];

        /**
         * VERIFY PASSWORD
         */
        const isPasswordMatched = await compare(
            password,
            user.password
        );

        if (!isPasswordMatched) {
            return responseHelper.validationError(
                res,
                {
                    password: "Invalid password",
                },
                "Authentication failed"
            );
        }

        /**
         * SUCCESS RESPONSE
         */
        return responseHelper.success(
            res,
            {
                id: user.id,
                userName: user.username,
                financialYear,
            },
            "Login successfully..!"
        );

    } catch (error) {
        return responseHelper.error(
            res,
            "Something went wrong while processing your request",
            error,
            500,
        );
    }
};