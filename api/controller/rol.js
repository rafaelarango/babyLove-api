const db = require("../config/connectDB");

// exports.registerRol = async (req, res) => {
//   try {
//     const roles = {
//       name: req.body.name,
//     };
//     console.log(roles);
//     const rol = await db.Roles.create(roles);
//     res.json(rol);
//   } catch (error) {
//     console.log(error);
//   }
// };

const registerRol = async (req, res) => {
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

const getRoles = async (req, res) => {
  try {
    db.Roles.findAll().then((data) => {
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRol = async (req, res) => {
  const id = req.params.id;

  const rolesData = await db.Roles.findOne({
    where: {
      id: id,
    },
  });
  if (!rolesData) {
    res.status(404).json({
      message: "rol not found",
    });
  }

  await db.Roles.destroy({
    where: {
      id: id,
    },
  });

  res.json({
    message: "rol destroyed successfully",
  });
};

const upDate = async (req, res) => {
  const rol = {
    name: req.body.name,
  };

  const id = req.params.id;

  const rolData = await db.Roles.findOne({
    where: {
      id: id,
    },
  });

  if (!rolData) {
    res.status(404).json({
      message: "rol not found",
    });
  }

  const rolUpDated = await db.Roles.update(rol, {
    where: {
      id: id,
    },
  });
  //console.log("usuario actualizado:", rolUpDated);
  res.json(rol);
};

module.exports = {
  registerRol,
  getRoles,
  deleteRol,
  upDate,
};
