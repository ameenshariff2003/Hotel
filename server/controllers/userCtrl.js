const Users = require('../models/users.js')

const User = {
    
    update:async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const updateUser = await Users.findByIdAndUpdate(
                id,
                {$set : req.body},
                {new:true}
            )
            res.status(200).json(updateUser);


            
        } catch (err) {
            next(err);
            
        }
    },
    delete:async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const deleteUser = await Users.findByIdAndDelete(id)
            res.status(200).json({msg:"User removed "});


            
        } catch (err) {
        next(err);            
        }

    },
    get : async(req,res,next)=>{
        try {
            const id  = req.params.id;
            const getUserById = await Users.findById(id)
            res.status(200).json(getUserById);
        } catch (err) {
            next(err);
            
        }

    },
    getall : async(req,res,next)=>{
        try {
            const getAllUser = await Users.find()
            res.status(200).json(getAllUser);
        } catch (err) {
            next(err);
            
        }
    },
}

module.exports = User;