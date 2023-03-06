var express=require('express')
var Api=require('./qry')
var router=express.Router()

router.post('/select',Api.select);
router.post('/add',Api.Add);
router.post('/update',Api.update);
router.post('/delet',Api.delet);

module.exports=router