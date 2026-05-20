import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import compression from "compression";
import authRoutes from "./routes/authRoutes.js";
import responseHelper from "./helper/responseHelper.js";
import e from "express";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// MIDDLEWARE
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        credentials: true,
    })
);
app.use(express.json());
app.use(helmet());

// HTTP LOGGER
app.use(
    morgan(
        NODE_ENV === "production"
            ? "combined"
            : "dev"
    )
);

app.use(compression());

// welcome route
app.get("/", (req, res) => {
    return responseHelper.success(
        res,
        {},
        "Welcome to PMAYG Portal API"
    );
});

// ROUTES
app.use("/api/v1/auth", authRoutes);

// 404 handler
app.use((req, res) => {
    return responseHelper.error(
        res,
        {},
        404,
        "Route not found"
    );
});

// SERVER
app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});