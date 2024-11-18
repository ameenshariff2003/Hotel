const Users = require("../models/users.js");
const bcrypt = require('bcryptjs');
const  {createErr}  = require("../utils/error.js");
const jwt = require('jsonwebtoken');




const authentication = {
    register: async (req, res, next) => {
        try {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password, salt)


            const newUser = new Users({
                username: req.body.username,
                email: req.body.email,
                password: hash,

            })
            await newUser.save()
            res.status(200).send('user created ')

        } catch (err) {
            next(createErr(404,"User already exixts"));

        }

    },
    login: async (req, res, next) => {
        try {
            const userName = req.body.username;
            const Password = req.body.password;

            const user =await  Users.findOne({ username: userName });

            if (!user) return next(createErr(404, "user not found!"))

            const isPassword = await bcrypt.compare(Password, user.password);
            if (!isPassword) return next(createErr(400, "Invalid credentials"));

            const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.SECRET_JWT_KEY)
            //._doc is from whole file and it is used bcoz we dont want to return isAdmin and password as response
            const {password,isAdmin,...otherDetails}=user._doc;
            // console.log(token)


            res.cookie("access_token",token,{
                httpOnly:true

            }).status(200).json({...otherDetails})

        } catch (err) {
            next(err);

        }

    },
    logout:(req,res)=>{
        try {
            res.clearCookie("access_token",{
                httpOnly:true
            }).json({msg:"logout success"})
            
        } catch (error) {
            console.log(err.message)
            
        }
    }
}

module.exports = authentication;