const express = require('express');
const cors = require('cors');

const app = express();

//settings
app.set('port', 4000);


//middlewares
app.use(cors()); //hace que dos servidores se conencten entre si
app.use(express.json());

//routes
//esto crea las rutas del servidor
app.use('/api/users',require('./routes/users'))

app.use('/api/notes', require('./routes/notes'))

module.exports = app;
