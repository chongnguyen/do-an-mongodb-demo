var shortid = require('shortid');

var db = require('../db');

module.exports.index = function (req, res) {
    res.render('users/users', {
        users: db.get('users').value()
    });
};

module.exports.search = function (req, res) {
    var q = req.query.q;
    var users = db.get('users').value();
    var matchedUsers = users.filter(function (item) {
        return item.name.toUpperCase().indexOf(q.toUpperCase()) !== -1;
    })

    res.render('users/users', {
        users: matchedUsers,
        value: q
    })
};

module.exports.create =  function (req, res) {
    res.render('users/create');
};

module.exports.view = function(req, res){
    var id = req.params.id;
    var user = db.get('users').find({id: id}).value();

    res.render('users/view', {
        name: user.name,
        phone: user.phone
    })
};

module.exports.postCreate = function (req, res) {
    var id = shortid.generate();
    req.body.id = id;
    res.cookie("name", "12345");
    
    db.get('users').push(req.body).write();
    res.redirect('/users');

};