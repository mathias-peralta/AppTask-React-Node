    const userCtrl = {};

const User = require('../models/User');
//Envia al cliente
userCtrl.getUsers = async(req, res) => {
    const users = await User.find();
    res.send(users)
};
userCtrl.createUsers = async(req, res) => {
    const { username } = req.body;
    const newUser =  new User({ username })
    await newUser.save();
    res.json({message: 'saved'})
};

userCtrl.deleteUsers = async(req, res) => {

    await User.findByIdAndDelete(req.params.id)
    res.send('user delete')
};

module.exports = userCtrl;