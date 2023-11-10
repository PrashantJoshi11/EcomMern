const express=require('express');
const {verifyToken,verifyTokenUser,verifyTokenAdmin}=require('./verifyToken');
const User = require('../Model/User');

const CryptoJS=require('crypto-js');
const route= express.Router();

route.put("/:id",verifyTokenUser,async(req,res)=>{
    if(req.body.password){
        req.body.password= CryptoJS.AES.encrypt(req.body.password,process.env.pass).toString();
    }
    try{
            const updatedUser= await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            );
            res.status(200).json(updatedUser);

    }
    catch(err){
        res.status(500).json(err)
    }

})
route.delete("/:id",verifyTokenAdmin,async(req,res)=>{

    try{
        await User.findByIdAndDelete(req.params.id);
      
        res.status(200).json("User has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.get("/Find",verifyTokenAdmin,async(req,res)=>{

    try{
        const data= await User.find();
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports=route;