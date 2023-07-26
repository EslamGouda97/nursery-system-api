require("dotenv").config();
const PORT = process.env.PORT || 8080;
const http = require("http");
const mongoose = require
  ("mongoose");
const app = require("./src/app");
mongoose
  .connect("mongodb://127.0.0.1:27017/ITISystem")

  .then(() => {
    console.log("db connection sucess");
    http.createServer(app).listen(PORT, () => {
      console.log("server  running on port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
