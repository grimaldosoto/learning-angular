const express = require('express');
const { dbConnection } = require('./database/config');

//crear el servidor de express
const app = express();

// Base de datos
dbConnection();


//rutas
app.get('/',(req, res)=>{
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(3000, ()=>{
    console.log('servidor corriendo en puerto:' + 3000);
});