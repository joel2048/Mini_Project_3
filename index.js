const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;


// Load Sequelize and models
const db = require("./models");

// Route files
const productRoutes = require("./routes/productRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes")
const orderRoutes = require("./routes/orderRoutes")

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", productRoutes);
app.use("/api", wishlistRoutes);
app.use("/api", orderRoutes);

// DB Connection
db.sequelize.sync()
  .then(() => {
    console.log("Database connection has been established successfully :3");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start server
app.listen(port, () => {
  console.log(`Running on the port http://localhost:${port}`);
});
