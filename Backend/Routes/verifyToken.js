const jwt= require('jsonwebtoken');

const verifyToken=(req,res,next)=>{
    const accessToken=req.headers.token;
    if(accessToken){
        const token= accessToken.split(" ")[1];
        
        jwt.verify(token,process.env.jwttkn,(err,user)=>{
            if(err){
                res.status(401).json("Token is not valid");
               
            }
            else{
               
                req.user=user;
                next();
            }
        })
    }
    else{
           return res.status(401).json("You are not valid")
    }
}
 
const verifyTokenUser=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin)
        {
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that");
        }
    })
}
const verifyTokenAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin)
        {
            next();
        }
        else{
            res.status(403).json("You are not allowed to do that");
        }
    })
}
module.exports={verifyToken,verifyTokenUser,verifyTokenAdmin};