var connection=require('./db')
const select=(req,res)=>{
    connection.query('select * from new1;',(err,result)=>{
        if(err){
            console.log("err");
        }
        else{
           res.send({
            status:200,
            message:"success",
            data:result
           })
        }
    })
}
const update=(req,res)=>{
    let fname=req.body.fname
    let lname=req.body.lname
    let location=req.body.location
    let email=req.body.email
    let dob=req.body.dob
    let edu=req.body.edu
    let about=req.body.about
    let id=req.body.id
    connection.query('update new1 set firstname=?, lastname=?, location=?, email=? ,  dob=? , education=? , about=? where id=?;',[fname,lname,location,email,dob,edu,about,id],(err,result)=>{
        if(err){
            console.log("err update",err);
        }
        else{
           res.send({
            status:200,
            message:"updated",
            data:result
           })
        }
    })
}
const delet=(req,res)=>{
    connection.query('delete FROM new1 where id=?;',[req.body.id],(err,result)=>{
        if(err){
            console.log("err  delete:",err);
        }
        else{
           res.send({
            status:200,
            message:"deleted",
            data:result
           })
        }
    })
}
const Add=(req,res)=>{
    let fname=req.body.fname
    let lname=req.body.lname
    let location=req.body.location
    let email=req.body.email
    let dob=req.body.dob
    let edu=req.body.edu
    let about=req.body.about
    connection.query('insert into new1(firstname,lastname,location,email,dob,education,about) values(?,?,?,?,?,?,?);',[fname,lname,location,email,dob,edu,about],(err,result)=>{
        if(err){
            console.log("err insert",err);
        }
        else{
           res.send({
            status:200,
            message:"success",
            data:result
           })
        }
    })
}

const Api={select,Add,update,delet}

module.exports=Api