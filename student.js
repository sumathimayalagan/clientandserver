var db=require('./db');
var express=require('express')

var cors=require('cors')
const port=7000;


    db.connect((err)=>{
        if(err){
            console.log("err",err);
        }
        else{
            console.log("db connect");
        }
    })
var app=express()
app.use(express.json())
app.use(cors())
app.listen(port)

app.use(require('./route'))