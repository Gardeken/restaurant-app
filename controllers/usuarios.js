const userRouter = require("express").Router();
const user = require("../models/usuario");

userRouter.get("/", (req, res) => {
  const { usuario, contraseña } = req.query;

  async function consultarBD() {
    const consulta = await user.findOne({ usuario: usuario });
    if (consulta === null) {
      return res.status(401).json({
        message: "Usuario no encontrado",
      });
    }
    if (consulta.contraseña === contraseña) {
      if (consulta.rol === 1) {
        res.status(202).json({
          message: "/admin/panel",
        });
      } else {
        res.status(202).json({
          message: "/pedidos",
        });
      }
    } else {
      res.status(401).json({
        message: "Contraseña incorrecta",
      });
    }
  }

  consultarBD().catch(console.error);
});

module.exports = userRouter;
