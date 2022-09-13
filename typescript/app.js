var express = require("express");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render("home");
});
app.get('/main', function (req, res) {
    res.render("main");
});
app.post('/login/value', function (req, res) {
    console.log(req.body);
    console.log(req.body.userWordInput);
    res.render("main", { result: req.body.userWordInput });
});
app.listen(3000, function () {
    console.log("Server is running on the 3000 port...");
});
