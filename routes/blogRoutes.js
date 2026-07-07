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

router.get("/blogs", getAllBlogs);

router.get("/blogs/:id", getBlogById);

router.put("/blogs/:id", protect, updateBlog);

router.delete("/blogs/:id", protect, deleteBlog);

module.exports = router;
