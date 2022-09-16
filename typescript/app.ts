//import bodyParser from 'body-parser';
import { Request, Response } from "express";

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let wordArr:string[] = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({extended: true}));

//app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req: Request,res: Response) => {    //home
    res.render("home");
});

app.get('/main',(req: Request,res: Response)=>{      //main
    res.render("main");
});

app.post('/main/value',(req: Request, res: Response)=>{     //request values
    wordArr.push(req.body.userWordInput);
    res.render("main",{word:" wordArr.toString()"});
    console.log(wordArr);
});

app.listen(3000,()=>{
    console.log("Server is running on the 3000 port...");
});