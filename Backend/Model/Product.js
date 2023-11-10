const mongoose=require('mongoose');

const PrductSchema= new mongoose.Schema(
    {
       
        title:{type:String,required:true},
        type:{type:String,required:true},
        img:{ type:String,required:true },
        vsp:{type:String,default:"VSP"},
        vsprice:{type:Number,required:true},
        mrp:{type:String,default:"MRP"},
        mrprice:{type:Number,required:true},
        color:{type:Array},
        off:{type:String},
        tag:{type:String,required:true},



    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model("Product",PrductSchema);


