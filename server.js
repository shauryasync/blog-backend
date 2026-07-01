require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;

app.get("/about/blogs", (req, res) => {
  const blog = [
    { id: 1, title: "blog1", author: "shaurya" },
    { id: 2, title: "blog2", author: "swarnim" },
  ];
  res.json(blog);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
