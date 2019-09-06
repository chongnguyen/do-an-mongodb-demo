var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var userRouter = require('./router/users.router');
var authRouter = require('./router/auth.router');
var productRouter = require('./router/products.router');
var authMiddleware = require('./middleware/auth.middleware');


var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        name: "Nguyen Duc Trong"
    });
});

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/users', authMiddleware.authMiddleware, userRouter);

app.listen(port, function () {
    console.log("listen to port: " + port);
})
