const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  const { title, content } = req.body;

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

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);

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
    const blog = await Blog.findById(id);

    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!updatedBlog) {
      return res.status(404).josn({
        message: "Blog Not Found",
      });
    }

    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to modify this blog",
      });
    }

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
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({
        message: "Blog Not Found",
      });
    }
    if (blog.author.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "You are not allowed to modify this blog",
      });
    }

    res.status(200).json({
      message: "Blog Deleted Successfully",
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
