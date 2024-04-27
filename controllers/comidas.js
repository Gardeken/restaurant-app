//1 definir el router
//router: POST, GET, DELETE , REGISTRO, CONSULTAR

const foodRouter = require("express").Router();
const food = require("../models/comida");

// 2 registro de la informacion que el usuario registro

foodRouter.get("/", (request, response) => {
  async function consultarComida() {
    const consultarComida = await food.find();
    response.json(consultarComida);
  }

  consultarComida().catch(console.error);
});

module.exports = foodRouter;
