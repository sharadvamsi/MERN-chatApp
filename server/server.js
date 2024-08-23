import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import dbConnection from "./db/dbConnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
    dbConnection();
});


app.get("/", (req, res) => {
    res.send("Hello from Backend");
});

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)