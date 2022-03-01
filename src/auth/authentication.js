const jwt=require('jsonwebtoken')
const User=require('../models/User')

const authentication=async(req,res,next)=>{
    try{
        const token=req.cookies.jwttoken;
        const VerifyUser=jwt.verify(token,process.env.SECURE_KEY)
        const rootUser=await User.findOne({_id:VerifyUser._id,"tokens.token":token},{updatedAt:0,password:0,createdAt:0})
        if(!rootUser){
            throw new Error("user not found")
        }
        else{
            req.token=token;
            req.rootUser=rootUser;
            req.userID=rootUser._id
            next();
        }
    }
    catch(err){
        res.status(401).send("Unauthorized: No token provided")
    }
}
module.exports=authentication 