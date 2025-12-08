const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

require("dotenv").config();

const allowedOrigins = [
  "http://localhost:3000",
  "https://msg-website.vercel.app",
  "https://msg-website-kulmeet-singhs-projects.vercel.app/",
  "https://msg-website-git-main-kulmeet-singhs-projects.vercel.app/",
  "https://mskcreativestudio.com",
];

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // allow non-browser tools like Postman (no Origin header)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    allowedHeaders: ["Content-Type", "Authorization", "Origin"],
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());

const user = require("./routes/userRoute");
const exhibition = require("./routes/exhibitionRoute");

app.use("/api/v1/user", user);
app.use("/api/v1/exhibition", exhibition);

app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
