const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
//servidor
app.set('port',5000);
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//middlewarews
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); //convertir los datos a json de manera automatica

//rutas
app.use(require('./routes/index'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//404 error
app.use((req, res, next)=>{
    res.status(404).send('404 no encontrado'); //se envia no encontrado
});

module.exports = app;