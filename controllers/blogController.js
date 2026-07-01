const Blog = require("../models/Blog");

const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  const blog = await Blog.create({
    title,
    content,
    author,
  });

  res.status(201).json(blog);
};

module.exports = { createBlog };
