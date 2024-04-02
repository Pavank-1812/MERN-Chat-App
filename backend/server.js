//package imports
import path from 'path';
import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
//routes
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
// database imports
import connectToMongoDB from "./db/connectToMongoDB.js";

import { app, server } from "./socket/socket.js";

// const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser()); //TO PARSE THE INCOMING COOKIES FROM REQ.COOKIES

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get("*", (req,res) =>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});
