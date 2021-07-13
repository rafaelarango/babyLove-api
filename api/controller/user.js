const db = require("../config/connectDB");

exports.registerUser = async (req, res) => {
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
};
