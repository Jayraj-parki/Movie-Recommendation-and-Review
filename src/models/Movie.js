const mongoose = require("mongoose")


const MovieSchema = mongoose.Schema({
    title: {
        type:String,
        required:true,
        trim:true
    },
    release_date:{
        type:String,
        required:true,
        trim:true
    },
    language: {
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    overview: {
        type:String,
        required:true,
        trim:true
    },
    genre:{
        type:Array,
    },
    poster: {
        type:String,
        required:true,
        trim:true
    },
},
    { timestamps: true }
)

const Movie=new mongoose.model("Movie",MovieSchema)

module.exports=Movie






