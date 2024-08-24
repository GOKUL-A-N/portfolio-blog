import express from 'express';

import { addBlog , showBlogs , particularBlog } from '../controllers/blogController.js';

export const blogRouter = express.Router();

blogRouter.post('/addBlog',addBlog);

blogRouter.get('/showBlog', showBlogs);

blogRouter.get('/particularBlog/:id', particularBlog);
