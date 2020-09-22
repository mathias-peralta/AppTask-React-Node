const userCtrl = {};

userCtrl.getUsers = (req, res) => res.send('users routes');
userCtrl.createUsers = (req, res) => res.send('users routes');
userCtrl.deleteUsers = (req, res) => res.send('users routes');

module.exports = userCtrl;