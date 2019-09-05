var express = require('express');
var bodyParser = require('body-parser')

var userRouter = require('./router/users.router');

var app = express();
var port = 3000;

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home', {
        name: "Nguyen Duc Trong"
    });
});

app.use('/users', userRouter);

app.listen(port, function () {
    console.log("listen to port: " + port);
})
