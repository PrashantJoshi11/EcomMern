const express=require('express');
const {verifyToken,verifyTokenUser,verifyTokenAdmin}=require('./verifyToken');
const User = require('../Model/User');
const ProductModel=require('../Model/Product')
const CryptoJS=require('crypto-js');
const route= express.Router();


route.post("/new",verifyTokenAdmin,async(req,res)=>{
  console.log(req.body);
    try{

            const Product= await new ProductModel(req.body);
            const Productdata= await Product.save();
            res.status(200).json(Productdata);

    }
    catch(err){
        res.status(500).json(err)
    }

})



route.put("/:id",verifyTokenAdmin,async(req,res)=>{

    try{
            const updatedProduct= await ProductModel.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            );
            res.status(200).json(updatedProduct);

    }
    catch(err){
        res.status(500).json(err)
    }

})
route.delete("/:id",verifyTokenAdmin,async(req,res)=>{

    try{
        await ProductModel.findByIdAndDelete(req.params.id);
      
        res.status(200).json("Product has been deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})

route.get("/find/:id",async(req,res)=>{

    try{
        const data= await ProductModel.findById(req.params.id);
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})
route.get("/Find",async(req,res)=>{
    const queryCatg=req.query.type;
    console.log(queryCatg);
    try{
        let data;
        if(queryCatg){
            
            data= await ProductModel.find({type:queryCatg});
            console.log("true",queryCatg);
        }
        else{
         data= await ProductModel.find();
        }
       
      
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports=route;