const mongoose = require("mongoose")
const bcrypt=require('bcryptjs')
const jwt =require('jsonwebtoken')
const UserSchema = mongoose.Schema({
   username:{
       type:String,
       required:true,
       trim:true,
   },
   email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
   },
   password:{
    type:String,
    required:true,
    min:6
   },
   profile:{
    type:String,
    trim:true,
   },
   tokens:[
    {
        token:{
            type:String,
            trim:true,
        }
    }
]


},
    { timestamps: true }
)

UserSchema.pre('save',async function(next){
    try{
        if(this.isModified('password')){
            this.password=await bcrypt.hash(this.password,10)
        }
        next();
    }
    catch(err){
        console.log("Error in hashing password")
    }
})

UserSchema.methods.getHashPassword=async function(password){
    try{
        hashPass=await bcrypt.hash(password,10)
        return hashPass
    }
    catch(err){
        console.log("Error in getting hashing password")
    }
 }
UserSchema.methods.generateToken=async function(){
    try{
     const token=jwt.sign({_id:this.id.toString()},process.env.SECURE_KEY)
     this.tokens=this.tokens.concat({token:token})
     await this.save();
     return token
    }
    catch(err){
        console.log("Error in token generation"+err)
    }
 }

const User=new mongoose.model("User",UserSchema)

module.exports=User






