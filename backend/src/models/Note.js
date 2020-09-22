const { Schema, model} = require('mongoose');

//aqui tenemos como la base de datos va guardar y actualizar informacion



const noteSchema = new Schema({
    title: String,
    content: {
        type: String,
        required: true
    },
    author: String,
    
},{
    timestamps: true
})

model('Note', noteSchema);


module.exports = model('Note', noteSchema);
