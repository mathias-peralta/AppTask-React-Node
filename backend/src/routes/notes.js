const { Router } = require('express');

const router = Router();

const { getNotes, createNotes, updateNotes, getNote,deleteNote } = require('../controllers/notesController');

router.route('/').get(getNotes)
router.route('/').post(createNotes);

router.route('/:id').put(updateNotes);
router.route('/:id').get(getNote);
router.route('/:id').delete(deleteNote);

module.exports = router;