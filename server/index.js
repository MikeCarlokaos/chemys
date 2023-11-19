const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Apply CORS only for the /send route
app.post("/send", cors(), async (req, res) => {
  const { fname, lname, phone, email, company, enquiry } = req.body;

  const content = `
    Contact details
    \n FirstName: ${fname} ${lname} \n Phone: ${phone} \n Email: ${email} \n Company: ${company} \n
    Enquiry:
    \n
    ${enquiry}
  `;

  const mailOptions = {
    from: email,
    to: process.env.CLIENT_EMAIL,
    subject: `Enquiry from website contact-form`,
    text: content,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Message sent");
    res.json({
      status: "success",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({
      status: "fail",
    });
  }
});

// middleware
app.use(express.json());

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`Server is ready to take messages: ${success}`);
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const port = 3001;
const server = app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
