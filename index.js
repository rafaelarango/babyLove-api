const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";
const db = require("./api/config/connectDB");


//ruta de prueba
db.sequelize.sync({ force: false }).then(() => {
  console.log("drop and re-syncronised db");
});

require("./api/routes/user")(app);

//iniciar server
app.listen(port, () => {
  console.log(`Escuchando por el puerto: http://${host}:${port}`);
});
