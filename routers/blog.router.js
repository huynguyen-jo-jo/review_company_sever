import express from "express";
import { getBlogs, createBLog } from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/", createBLog);

export default router;
