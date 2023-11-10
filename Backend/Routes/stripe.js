const express=require('express');
const stripe=require('stripe')(process.env.stripeKey)
const CryptoJS=require('crypto-js');
const route= express.Router();

route.post("/payment",(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenid,
        amount:req.body.amount,
        currency:"usa"
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr);
        }
        else{
            res.status(200).json(stripeRes);
        }
    } 
    )
})



module.exports=route;