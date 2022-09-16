"use strict";
exports.__esModule = true;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var wordArr = [];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render("home");
});
app.get('/main', function (req, res) {
    res.render("main");
});
app.post('/main/value', function (req, res) {
    wordArr.push(req.body.userWordInput);
    res.render("main", { word: " wordArr.toString()" });
    console.log(wordArr);
});
app.listen(3000, function () {
    console.log("Server is running on the 3000 port...");
});
