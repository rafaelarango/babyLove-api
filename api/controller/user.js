const db = require("../config/connectDB");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const users = {
        id_rol: req.body.id_rol,
        name: req.body.name,
        type_document: req.body.type_document,
        document: req.body.document,
        direction: req.body.direction,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password,
      };
      console.log(users);
      const user = await db.Users.create(users);
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  },

  login: async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const UserDatabase = await db.Users.findOne({
      where: {
        email: email,
      },
    });
    console.log("el arreglo", !UserDatabase); // por que se niega??
    if (!UserDatabase) {
      res.status(404).json({ message: "No se encontro el usuario" });
    }
    if (password === UserDatabase.password) {
      console.log("password se encontro" + UserDatabase);
      res.json(UserDatabase);
    } else {
      res
        .status(404)
        .json({ message: "No se encontro usuario y/o contraseña" });
    }
  },
};
