import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import blogControllers from "../controllers/blogs.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
router.get("/", (req, res) => {
  blogControllers.getBlogs;
});
router.get("/:blogId", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "../public/blog.html"));
});
export default router;
