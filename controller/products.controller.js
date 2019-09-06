var db = require('../db');

module.exports.index = function(req, res){
    var x = req.query.page || 1;
    var n = 16  ;
    var start = (x - 1) * n;
    var end = x * n;
    var totalPage = db.get('products').value().length / n;
    var temp = 0;
    var arr = [];
    for(var i = 0; i < totalPage; i++){
        arr.push(++temp);
    }
    res.render('products/products', {
        products: db.get('products').value().slice(start, end),
        pages: arr
    });
}