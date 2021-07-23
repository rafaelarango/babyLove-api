module.exports = (app) => {
    const roles = require("../controller/rol");
    var router = require("express").Router();

    router.post("/rol", roles.registerRol);
    router.get("/listRoles", roles.getRols)
    app.use("/api/users", router);
}