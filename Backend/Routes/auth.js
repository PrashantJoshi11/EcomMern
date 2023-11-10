const express=require('express');
const route= express.Router();
const CryptoJS=require('crypto-js');
const jwt=require('jsonwebtoken');
const UserModel=require('../Model/User');

route.post("/Register",async(req,res)=>{
    var ciphertext = CryptoJS.AES.encrypt(req.body.password,process.env.pass).toString();

    const data=new UserModel({
        username:req.body.username,
        email:req.body.email,
        password:ciphertext,
        isSeller:req.body.isSeller
    })

    try{
        const username=await UserModel.findOne({username:data.username});
        const email=await UserModel.findOne({email:data.email});

        if(username){
            
               res.status(200).send({message:"user present"});

        }
        else if(email){
            res.status(200).send({message:"Email present"});
        }
        
        else{
         
           const savedata= await data.save();
           const {password,...other}=savedata._doc;
           res.status(201).json(other);
       }
       

    }
    catch(err){
        res.status(500).json(err);
    }
})

route.post("/Login",async(req,res)=>{
    try{
   
       const user= await UserModel.findOne({username:req.body.username});
         console.log("data for the user ===>",user);
          if(!user){
            console.log("not found");
           res.status(201).send({message:"sorry User not found"});
           } 
  
           else{
            
         

        const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.pass);
       
        const userpass = hashedPass.toString(CryptoJS.enc.Utf8);
       
        if(userpass !== req.body.password){
            res.status(401).send({message:"Wrong credentials"});
        }

            // userpass !== req.body.password && res.status(401).send("Wrong Credentials");

        else{
            const accessToken = jwt.sign({
                id:user._id,
                isSeller:user.isSeller
            },
             process.env.jwttkn,
             {
                expiresIn:"3d"
             } 
            )   
           const {password,...other}=user._doc;
    
            res.status(200).json({...other,accessToken});
            console.log("Working Properly"); 
        }
    }
    }

    catch(err){
        res.status(500).send({message:"server issue"});
    }
})

module.exports=route;