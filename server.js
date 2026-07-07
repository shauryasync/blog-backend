require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//try mvc archi
const blogRoutes = require("./routes/blogRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//Blog Route
app.use("/api", blogRoutes);

//User Route
app.use("/api/users", userRoutes);

//database connection
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
