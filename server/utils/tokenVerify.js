const jwt = require('jsonwebtoken');
const {createErr} = require('../utils/error.js')

const token = {
    verifyToken:(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createErr(401,'your not authenticated'))
    }

    jwt.verify(token,process.env.SECRET_JWT_KEY,(err,user)=>{
        if(err){       
            return next(createErr(403,"Something is wrong"));}
        //req.user anything can be in the place of user
        req.user = user
        next()

    })
},
verifyUser:(req,res,next)=>{
    token.verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err){
                return next(createErr(403,"you are not authorize"));
            }

        }
    })
},
verifyAdmin:(req,res,next)=>{
    token.verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else
            
                return next(createErr(403,"you are not admin"));
            

        
    })

}
}


module.exports = token;