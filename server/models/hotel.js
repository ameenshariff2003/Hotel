const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:true,

    },
    city:{ 
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    distance:{
        type:String,
        required:true,
    },
    photos:{
        type:[String],
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String
    },
    rating:{
        type:Number,
        min:0,
        max:5,
    },
    rooms:{
        type:[String],
    },
    cheapPrice:{
        type:Number,
        required:true,
    },
    feauterd:{
        type:Boolean,
        default:false,
    }
})
const Hotel=mongoose.model('Hotel',HotelSchema);

module.exports = Hotel;