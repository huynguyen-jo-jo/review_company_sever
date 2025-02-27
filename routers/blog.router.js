import express from "express";
import { getBlogs, createBLog, getReview} from "../controllers/blog.controller.js";

const router = express.Router();

router.get("/", getBlogs);

router.post("/", createBLog);

export default router;
