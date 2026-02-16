const express = require("express");
const cors = require("cors");
require("dotenv").config();

const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/feedback", feedbackRoutes);

app.listen(5000, () => {
  console.log("Server running on port 3000");
});