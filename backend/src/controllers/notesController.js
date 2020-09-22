const { model } = require("mongoose");

const notesCtrl = {};

const Note = require('../models/Note');

//Envia los datos al Frontend
notesCtrl.getNotes = async(req, res) => {
   //optiene un objeto con los datos 
   const notes = await Note.find(); 
   //envia al client
   res.json(notes);
};
//Crea un nuevo dato
notesCtrl.createNotes = async(req, res) => {
    const { title, content, date, author } = req.body;
    //se crea una nueva nota
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author 
    })
    await newNote.save();
    console.log(newNote);
    res.json({message: 'note saved'});
};

//Actualiza los datos
notesCtrl.updateNotes = async(req, res) => {
    console.log(req.params.id, req.body);
    const { title, content, author } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {
        title: title,
        author: author,
        content: content
    })
    res.json({message: 'noted changed'});
};

notesCtrl.getNote = async(req, res) => {
   const note = await Note.findById(req.params.id);
    res.json(note)
    console.log(note);
};

notesCtrl.deleteNote = async(req, res) => {
   await Note.findByIdAndDelete(req.params.id);
   res.json({ message: 'note deleted'});
};

module.exports = notesCtrl;