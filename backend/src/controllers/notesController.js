const { model } = require("mongoose");

const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async(req, res) => {
   //optiene un objeto con los datos 
   const notes = await Note.find(); 
   //envia al client
   res.json(notes);
};

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

notesCtrl.updateNotes = (req, res) => res.json({message: 'noted changed'});

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