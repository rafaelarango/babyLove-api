const db = require("../config/connectDB");

exports.registerRol = async (req, res) => {
  try {
    const roles = {
      name: req.body.name,
    };
    console.log(roles);
    const rol = await db.Roles.create(roles);
    res.json(rol);
  } catch (error) {
    console.log(error);
  }
};
