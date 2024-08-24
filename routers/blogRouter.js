import express from 'express';

import { addBlog , showBlogs } from '../controllers/blogController.js';

export const blogRouter = express.Router();

blogRouter.post('/addBlog',addBlog);

blogRouter.get('/showBlog', showBlogs);
