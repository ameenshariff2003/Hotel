const Hotel = require("../models/hotel.js");

const hotel = {
    create : async(req,res,next)=>{
        try {
            const newHotel = new Hotel(req.body)
            const saveHotelDb = newHotel.save()
            res.status(200).json({msg:"new hodel added"});


            
        } catch (err) {
            next(err)
            
        }
    },
    update:async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const updateHotel = await Hotel.findByIdAndUpdate(
                id,
                {$set : req.body},
                {new:true}
            )
            res.status(200).json(updateHotel);


            
        } catch (err) {
            next(err);
            
        }
    },
    delete:async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const deleteHotel = await Hotel.findByIdAndDelete(id)
            res.status(200).json({msg:"hotel deleted"});


            
        } catch (err) {
        next(err);            
        }

    },
    get : async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const getById = await Hotel.findById(id)
            res.status(200).json(getById);
        } catch (err) {
            next(err);
            
        }

    },
    getall : async(req,res,next)=>{
        try {
            const getAllHotel = await Hotel.find()
            res.status(200).json(getAllHotel);
        } catch (err) {
            next(err);
            
        }
    },
}

module.exports = hotel;