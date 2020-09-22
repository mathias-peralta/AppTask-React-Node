const { model } = require("mongoose");

const notesCtrl = {};

notesCtrl.getNotes = (req, res) => res.json({message: []});

notesCtrl.createNotes = (req, res) => res.json({message: 'noted saved'});

notesCtrl.updateNotes = (req, res) => res.json({message: 'noted changed'});

notesCtrl.getNote = (req, res) => res.json({message: 'getNote'});

notesCtrl.deleteNote = (req, res) => res.json({message: 'note deleted'});

module.exports = notesCtrl;