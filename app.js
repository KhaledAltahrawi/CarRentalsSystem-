const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use("/api", require("./routes/userRoutes"));
// root
app.get("/", (req, res) => {
 res.json({ message: "Welcome to the car rental application." });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
