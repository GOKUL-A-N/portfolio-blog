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

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173','https://gokul-natarajmoorthy.vercel.app/','https://personal-portfolio-websit-git-7a0864-gokulans-projects-147b3e22.vercel.app/'); // Replace with your frontend origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

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
