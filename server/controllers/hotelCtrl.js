const Hotel = require("../models/hotel.js");

const hotel = {
    create : async(req,res,next)=>{
        try {
            const newHotel = new Hotel(req.body)
            const saveHotelDb = await newHotel.save()
            res.status(200).json(saveHotelDb);


            
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
    countByCity:async(req,res,next)=>{
        const cityAll = req.query.city.split(",")
        try {
            const listCount = await Promise.all(cityAll.map(city=>{
                return Hotel.countDocuments({city:city})
            }))
            res.status(200).json(listCount);
        } catch (err) {
            next(err);
            
        }
    },
    countByType:async(req,res,next)=>{
        try {
            const getCountByType = await Hotel.find()
            res.status(200).json(getAllHotel);
        } catch (err) {
            next(err);
            
        }
    },
}

module.exports = hotel;