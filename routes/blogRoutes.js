const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.post("/blogs", protect, createBlog);

router.get("/blogs", protect, getAllBlogs);

router.get("/blogs/:id", protect, getBlogById);

router.put("/blogs/:id", protect, updateBlog);

router.delete("/blogs/:id", protect, deleteBlog);

module.exports = router;
