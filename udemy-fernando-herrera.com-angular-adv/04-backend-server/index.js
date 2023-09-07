const express = require('express');

//crear el servidor de express
const app = express();

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