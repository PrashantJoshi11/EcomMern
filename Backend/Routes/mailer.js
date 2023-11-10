const express=require('express');

const nodemailer = require("nodemailer");
const mymail="prashantjoshipj67@gmail.com"

const sendMail= async(req,res)=>{

  try{
    const usersentmail=req.body.inputdata;
    const username=req.body.username;
    if(usersentmail){
    const transporter = nodemailer.createTransport({
        service:"gmail",
        port: 587,
        auth: {
         
          user: mymail,
          pass: "pwui fhuv iuiu bzih",
        },
      });


        // send mail with defined transport object
  const info = await transporter.sendMail({
    from: {
        name:"ElectroMart",
        address:mymail
    }, // sender address
    to: usersentmail, // list of receivers
    subject: "Latest Updates", // Subject line
    html: `<b><h3> Hello ${username} thank you for connecting with Us 🙏 </h3>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.status(200).json(info);
    }
    else{
  res.status(201).send("not sent");
      
    }


}


catch(err){
  res.status(500).send("Server Error");

}
}
module.exports=sendMail;