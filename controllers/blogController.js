const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({
      message: "Title and Content are required",
    });
  }
  const blog = await Blog.create({
    title,
    content,
    author: req.user._id,
  });

  res.status(201).json(blog);
};

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs).populate("author", "name email role");
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id).populate("author", "name email role");

    if (!blog) {
      res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!req.body.title || !req.body.content) {
      return res.status(400).json({
        message: "Title and Content are required",
      });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (
      blog.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "You are not allowed to modify this blog",
      });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    res.status(200).json(updatedBlog);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    if (
      blog.author.toString() !== req.user._id.toString() &&
      req.user.role !== "admin"
    ) {
      return res.status(403).json({
        message: "You are not allowed to delete this blog",
      });
    }

    await Blog.findByIdAndDelete(id);

    res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
