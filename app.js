require("dotenv").config();

const express = require("express"),
  mongoose = require("mongoose"),
  axios = require("axios"),
  app = express(),
  tokenBD = process.env.token,
  path = require("path"),
  foodRouter = require("./controllers/comidas"),
  mesaRouter = require("./controllers/mesas");

async function conectarDB() {
  try {
    await mongoose.connect(tokenBD);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log(error);
  }
}

conectarDB();

app.use("/", express.static(path.resolve("views")));
app.use(express.json());
module.exports = app;
app.use("/controllers", express.static(path.resolve("controllers")));
app.use("/api/foods", foodRouter);
app.use("/api/mesa", mesaRouter);
