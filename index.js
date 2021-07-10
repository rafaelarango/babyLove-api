const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1";



//ruta de prueba




//iniciar server
app.listen(port, (req, res) => {
    console.log(`Escuchando por el puerto: http://${host}:${port}`)
})