import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());

app.use(express.json());

app.use(helmet());

app.use(morgan("dev"));

// ROUTES
app.use("/api/auth", authRoutes);

// ROOT
app.get("/", (req, res) => {
    res.json({
        message: "PMAY-G API Running",
    });
});

// SERVER
app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});