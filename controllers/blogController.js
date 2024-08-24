import mongoose from "mongoose";
import { blogModel } from "../models/Blogs.js";

// adding new blog
export const addBlog = async(req,res) => {
    try{
        // getting blog datas 
        const {blogTitle , blogContent} = req.body;

        // validation of blog datas
        if(!blogTitle || !blogContent || blogTitle.length <= 0|| blogContent.length <= 0){
            return res.status(400).send({
                success: false,
                message: "title or content cannot be empty"
            })
        }

        const newBlog = new blogModel({blogTitle: blogTitle, blogContent: blogContent});
        newBlog.save();

        return res.status(200).send({
            success: true,
            message: "new blog has been created",
            newBlog,
        })
    }catch(err){
        console.log(err);
        console.log(req.body);
        return res.status(500).send({
            message: "Error creating blog",
            success: false,
            err,
        })
    }
}

// displaying all blogs
export const showBlogs = async(req,res) => {
    try{

        const blog = await blogModel.find({});

        return res.status(200).send({
            success: true,
            blogCount: blog.length,
            blog
        })

    }catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error displaying blogs",
            err,
        })
    }
}

// show particular blog
export const particularBlog = async(req,res) => {
    try{

        const blog = await blogModel.findById(req.params.id);

        return res.status(200).send({
            success: true,
            blog
        })        

    }catch(err){
        console.log(err);
        return res.status(500).send({
            success: false,
            message: "Error displaying particular blog",
            err,
        })
    }
}