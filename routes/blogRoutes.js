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

router.post("/blogs", createBlog);

router.get("/blogs", protect, getAllBlogs);

router.get("/blogs/:id", getBlogById);

router.put("/blogs/:id", updateBlog);

router.delete("/blogs/:id", deleteBlog);

module.exports = router;
