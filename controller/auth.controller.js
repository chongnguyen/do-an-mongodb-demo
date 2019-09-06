var db = require('../db');

module.exports.index = function (req, res) {
    res.render('auth/login');
}

module.exports.login = function (req, res) {
    var email = req.body.email;
    var pass = req.body.pass;

    var user = db.get('users').find({ email: email }).value();
    if (!user) {
        res.render('auth/login', {
            errors: "Email does not exist",
            value: req.body
        })
        return;
    }

    if (pass !== user.pass) {
        res.render('auth/login', {
            errors: "Wrong password !",
            value: req.body
        })
        return;
    }
    res.cookie('userId', user.id);
    res.redirect('/users');
}

