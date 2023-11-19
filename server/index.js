const path = require("path");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
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

app.post("/send", (req, res) => {
  const { fname, lname, phone, email, company, enquiry } = req.body;

  const content = `
     Contact details
  \n FirstName: ${fname} ${lname} \n Phone: ${phone} \n Email: ${email} \n Company: ${company} \n
     Enquiry:
    \n
       ${enquiry}
  `;

  let mailOptions = {
    from: email,
    to: process.env.CLIENT_EMAIL,
    subject: `Enquiry from website contact-form`,
    text: content,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.error("Error sending email:", err);
      res.json({
        status: "fail",
      });
    } else {
      console.log("Message sent");
      res.json({
        status: "success",
      });
    }
  });
});

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
