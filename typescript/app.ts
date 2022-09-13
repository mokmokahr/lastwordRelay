const express = require("express");
var bodyParser = require('body-parser');
const app = express();

let wordArr:string[] = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req: any,res: any) => { //home
    res.render("home");
});

app.get('/main',(req: any,res: any)=>{ //main
    res.render("main");
});

app.post('/login/value',(req: any, res: any)=>{ //request values
    console.log(req.body);
    console.log(req.body.userWordInput);
    wordArr.push(req.body.userWordInput);
    res.render("main",{result: wordArr});
});

app.listen(3000,()=>{
    console.log("Server is running on the 3000 port...");
});