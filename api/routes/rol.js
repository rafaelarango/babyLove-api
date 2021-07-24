module.exports = (app) => {
  const roles = require("../controller/rol");
  var router = require("express").Router();

  router.post("/rol", roles.registerRol);
  router.get("/listar", roles.getRoles);
  router.put("/upDate/:id", roles.upDate);
  router.delete("/eliminar/:id", roles.deleteRol);

  app.use("/api/roles", router);
};
