const mesaRouter = require("express").Router();
const mesa = require("../models/mesa");

mesaRouter.post("/", (request, response) => {
  const { numMesa, hora, pedido } = request.body;

  const mesas = new mesa();

  mesas.numMesa = numMesa;
  mesas.Hora = hora;
  mesas.pedido = pedido;

  async function guardarBD() {
    await mesas.save();
  }
  guardarBD().catch(console.error);
  response.status(200).json({ mensaje: "Se ha guardado con éxito" });
});

module.exports = mesaRouter;
