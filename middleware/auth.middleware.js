var db = require('../db');

module.exports.authMiddleware = function(req, res, next){
    var user = db.get('users').find({id: req.cookies.userId}).value();

    if(!user){
        res.redirect('/auth/login');
        return;
    }

    res.locals.user = user;
    next();
}