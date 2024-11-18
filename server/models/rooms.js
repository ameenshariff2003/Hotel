const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,

    },
    description:{ 
        type:String,
        required:true,
    },
    maxPeople:{
        type:Number,
        required:true,
    },
    roomNumbers:[{number:Number,unavailableDates :{type:[Date]} }]
   
    
})
const Room=mongoose.model('Room',RoomSchema);

module.exports = Room;