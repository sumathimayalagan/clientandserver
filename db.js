var db=require('mysql');
var connection=db.createConnection({
    host:"localhost",
    user:'root',
    password:'Radical#17@',
    database:'sumathi',
    })

module.exports=connection                 
