const {Router} = require('express');
const userCtrl = require('../controllers/usersController');
const { route } = require('./notes');

const router = Router();


const { getUsers, deleteUsers, createUsers} = require('../controllers/usersController');


router.route('/').get(getUsers);

router.route('/').post(createUsers);

router.route('/:id').delete(deleteUsers);

module.exports = router;