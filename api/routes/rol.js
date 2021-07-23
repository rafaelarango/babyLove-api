module.exports = (app) => {
    const roles = require("../controller/rol");
    var router = require("express").Router();

    router.post("/rol", roles.registerRol);
    app.use("/api/users", router);
}