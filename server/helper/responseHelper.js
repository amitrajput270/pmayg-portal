const responseHelper = {
    /**
     * SUCCESS RESPONSE
     */
    success(
        res,
        data = {},
        message = "Success",
        statusCode = 200
    ) {
        return res.status(statusCode).json({
            status: true,
            message,
            errors: null,
            data,
        });
    },

    /**
     * ERROR RESPONSE
     */
    error(
        res,
        message = "Something went wrong",
        errors = {},
        statusCode = 500
    ) {
        return res.status(statusCode).json({
            status: false,
            message,
            errors,
            data: {},
        });
    },

    /**
     * VALIDATION ERROR
     */
    validationError(
        res,
        errors,
        message = "Validation error",
        statusCode = 422
    ) {
        let formattedErrors = {};
        // EXPRESS VALIDATOR
        if (typeof errors.array === "function") {
            formattedErrors = errors.array().reduce(
                (acc, error) => {
                    acc[error.path] = error.msg;
                    return acc;
                },
                {}
            );
        } else {
            // MANUAL
            formattedErrors = errors;
        }
        return res.status(statusCode).json({
            status: false,
            message,
            errors: formattedErrors,
            data: {},
        });
    },

    /**
     * DATABASE ERROR
     */
    databaseError(res, error) {
        console.error(error);
        // POSTGRES UNIQUE ERROR
        if (error.code === "23505") {
            return res.status(400).json({
                status: false,
                message: "Duplicate entry found",
                errors: {
                    database: error.detail,
                },
                data: {},
            });
        }

        // FOREIGN KEY ERROR
        if (error.code === "23503") {
            return res.status(400).json({
                status: false,
                message: "Foreign key constraint failed",
                errors: {
                    database: error.detail,
                },
                data: {},
            });
        }

        // DEFAULT ERROR
        return res.status(500).json({
            status: false,
            message: "Database error",
            errors: {
                database: error.message,
            },
            data: {},
        });
    },
};

export default responseHelper;