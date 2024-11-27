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
            const {min,max,limit,...others} = req.query
            const getAllHotel = await Hotel.find({
                ...others,
                cheapPrice:{$gt:min||99,$lt:max||5000}})
                .limit(req.query.limit);
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
const hotelCount = await Hotel.countDocuments({type:"hotel"})
const villaCount = await Hotel.countDocuments({type:"villa"})

const lodgeCount = await Hotel.countDocuments({type:"lodges"})

const cabinCount = await Hotel.countDocuments({type:"cabin"})

const resortCount = await Hotel.countDocuments({type:"resort"})


await res.status(200).json([
            { type: "hotels", count: hotelCount },
            { type: "villa", count: villaCount },
            { type: "lodges", count: lodgeCount },
            { type: "cabin", count: cabinCount },
            { type: "resort", count: resortCount }
        ]); 
            
        } catch (err) {
            next(err);
            
        }
    },
}

module.exports = hotel;