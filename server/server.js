import express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import dbConnection from "./db/dbConnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
    dbConnection();
});


app.get("/", (req, res) => {
    res.send("Hello from Backend");
});

app.use("/api/auth", authRoutes)