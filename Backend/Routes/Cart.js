const express=require('express');
const {verifyToken,verifyTokenUser,verifyTokenAdmin}=require('./verifyToken');
const User = require('../Model/User');
const CartModel=require('../Model/Cart');
const CryptoJS=require('crypto-js');
const route= express.Router();


route.post("/new",verifyTokenUser,async(req,res)=>{
  
    try{
            const Cart= await new CartModel(req.body);
            const Cartdata= await Product.save();
            res.status(200).json(Cartdata);

    }
    catch(err){
        res.status(500).json(err)
    }

})

route.put("/:id",verifyTokenUser,async(req,res)=>{

    try{
            const updatedCart= await CartModel.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            );
            res.status(200).json(updatedCart);

    }
    catch(err){
        res.status(500).json(err)
    }

})
route.delete("/:id",verifyTokenUser,async(req,res)=>{

    try{
        await CartModel.findByIdAndDelete(req.params.id);
      
        res.status(200).json("Cart has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.get("/Find/:userid",verifyTokenUser,async(req,res)=>{

    try{
        const data= await CartModel.find({userid:req.params.userid});
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})
route.get("/Find",verifyTokenAdmin,async(req,res)=>{

    try{
        const data= await CartModel.find();
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})




module.exports=route;