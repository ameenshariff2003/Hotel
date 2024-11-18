const Room = require('../models/rooms.js');
const Hotel = require('../models/hotel.js');
const { createErr } = require('../utils/error.js');

const room = {
    create:async(req,res,next)=>{
        try {
            const hotelId = req.params.hotelid;
            const newRoom = new Room(req.body)
            const saveRoom = await newRoom.save()
            try {
                await Hotel.findByIdAndUpdate(hotelId,{
                    $push:{rooms:saveRoom._id}
                })
                
            } catch (err) {
                next(err)
                
            }

            res.status(200).json(saveRoom)

            
        } catch (err) {
            next(err)
            
        }
    },
    update:async(req,res,next)=>{
        try {


            const id  = req.params.id;
            const updateRoom = await Room.findByIdAndUpdate(
                id,
                {$set : req.body},
                {new:true}
            )
            res.status(200).json(updateRoom);


            
        } catch (err) {
            next(err);
            
        }
    },
    delete:async(req,res,next)=>{
        try {
            const hotelId = req.params.hotelid;
            const roomId = req.params.id
            await Room.findByIdAndDelete(roomId)

            try {
                await Hotel.findByIdAndUpdate(hotelId,{
                    $pull:{rooms:roomId}
                })
                
            } catch (err) {
                next(err)
                
            }
            res.status(200).json("room has deleted")


            
        } catch (err) {
        next(err);            
        }

    },
    get : async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const getById = await Room.findById(id)
            res.status(200).json(getById);
        } catch (err) {
            next(err);
            
        }

    },
    getall : async(req,res,next)=>{
        try {
            const getAllrooms = await Room.find()
            res.status(200).json(getAllRooms);
        } catch (err) {
            next(err);
            
        }
    },
}

module.exports = room;