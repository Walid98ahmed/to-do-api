const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const express = require("express");
const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT;

async function start() {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port: ${PORT} 🚀`);
  });
}

start();
