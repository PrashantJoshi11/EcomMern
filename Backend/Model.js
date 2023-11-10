const mongoose= require('mongoose');
const ProductSchema= new mongoose.Schema({
    Name:String,
    Price:Number
});
module.exports= mongoose.model('products',ProductSchema);
