const jwt = require("jsonwebtoken");
console.log("protect middlwar running ");
const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Not Authorized",
      });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(req.headers);
    next();
  } catch (error) {
    res.status(401).json({
      message: "Not Authorized",
    });
  }
};

module.exports = protect;
