const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Enable CORS for all routes
app.use(cors());

// Apply CORS only for the /send route
app.post("/send", async (req, res) => {
  // ... (unchanged)

  const mailOptions = {
    from: email,
    to: process.env.CLIENT_EMAIL,
    subject: `Enquiry from website contact-form`,
    text: content,
  };

  try {
    // ... (unchanged)
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({
      status: "fail",
    });
  }
});

// Serve the React app from the "dist" directory
app.use(express.static(path.resolve(__dirname, "../client/dist")));

// All other routes will return the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

const port = process.env.PORT || 3001;
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
