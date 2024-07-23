require("dotenv").config(); // Load environment variables from .env

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movieRoutes");
const cors = require('cors'); // Import cors package


const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const dbURI = process.env.MONGODB_URI; // Use environment variable for MongoDB URI
mongoose
  .connect(dbURI) // No need for useNewUrlParser and useUnifiedTopology options
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.static('public'));

app.use("/api", movieRoutes);

// Serve index.html for the root path
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000; // Use environment variable for port
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
