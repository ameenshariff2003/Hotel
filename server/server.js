const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const dbUrl = process.env.URL
const cookieParser = require('cookie-parser');
const auth = require("./routes/auth.js")
const hotel = require("./routes/hotel.js")
const rooms = require("./routes/rooms.js")
const users = require("./routes/users.js")





// app.get('/',(req,res)=>{
//     res.send("home page")
// })

//db connect 
const start = async()=>{
    try {
       await mongoose.connect(dbUrl)
        .then(()=>console.log("DB connect success"))

   
        
    } catch (error) {
        console.log(err)
        
    }
   
}
start();
mongoose.connection.on("disconnected",()=>{
    console.log("db disconnected")
})
//middlewares
app.use(cookieParser())
app.use(express.json());






//routes
app.use("/server",auth)
app.use("/server",hotel)
app.use("/server",rooms)
app.use("/server",users)


//error handeler
app.use((err,req,res,next)=>{
    const errorStatus = err.status||500;
    const errorMessage = err.message || "something went wrong";
    return res.json({
        success:false,
        status:errorStatus,
        meggage:errorMessage,
        stack:err.stack,
    })
})






app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})








