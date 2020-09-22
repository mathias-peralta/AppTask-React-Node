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
app.get('/api/users', (req, res) => {
    res.send('users routes')
})

app.get('/api/notes', (req, res) => {
    res.send('users notes')
})

module.exports = app;
