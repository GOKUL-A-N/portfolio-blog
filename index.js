import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { blogRouter } from "./routers/blogRouter.js";
import cors from "cors"
import http from "http";


const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("Welcome back chief");
})

app.use('/blogs',blogRouter)

const server = http.createServer(app)

mongoose
    .connect(process.env.MongoDBURL)
    .then(() => {
        console.log("Connected");
        server.listen(PORT,() => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.log(`Failed to connect to port ${err.message}`);
    })
