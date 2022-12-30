// connect to db locally

const mongoose = require("mongoose");

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/todo-api";

mongoose.Promise = global.Promise;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

module.exports = {
  mongoose,
};
