module.exports = (app) => {
  const roles = require("../controller/rol");
  var router = require("express").Router();

  router.post("/rol", roles.registerRol);
  router.get("/listar", roles.getRoles);
  router.delete("/eliminar/:id", roles.deleteRol);
  router.get("/listarUno/:id", roles.getRol);
  router.put("/upDate/:id", roles.upDate);

  app.use("/api/roles", router);
};