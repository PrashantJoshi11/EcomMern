const express=require('express');
const {verifyToken,verifyTokenUser,verifyTokenAdmin}=require('./verifyToken');
const User = require('../Model/User');
const OrderModel=require('../Model/Order');
const CryptoJS=require('crypto-js');
const route= express.Router();


route.post("/new",verifyTokenUser,async(req,res)=>{
  
    try{
            const Order= await new OrderModel(req.body);
            const Orderdata= await Order.save();
            res.status(200).json(Orderdata);

    }
    catch(err){
        res.status(500).json(err)
    }

})

route.put("/:id",verifyTokenAdmin,async(req,res)=>{

    try{
            const updatedOrder= await OrderModel.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            );
            res.status(200).json(updatedOrder);

    }
    catch(err){
        res.status(500).json(err)
    }

})
route.delete("/:id",verifyTokenAdmin,async(req,res)=>{

    try{
        await OrderModel.findByIdAndDelete(req.params.id);
      
        res.status(200).json("Order has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.get("/Find/:userid",verifyTokenUser,async(req,res)=>{

    try{
        const data= await OrderModel.find({userid:req.params.userid});
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})
route.get("/Find",verifyTokenAdmin,async(req,res)=>{

    try{
        const data= await OrderModel.find();
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})




module.exports=route;