const mongoose = require("mongoose")


const RatingSchema = mongoose.Schema({
   userId:{
       type:String,
       required:true,
       trim:true,
   },
   movieId:{
    type:String,
    required:true,
    trim:true,
   }, 
   rate:{
    type:Number,
    required:true,
    default:Math.ceil((Math.random(1,5)*5))
   }
},
    { timestamps: true }
)

const Rating=new mongoose.model("Rating",RatingSchema)

module.exports=Rating






// const mongoose = require("mongoose")


// const RatingSchema = mongoose.Schema({
//    userId:{
//        type:String,
//        required:true,
//        trim:true,
//    },
//    movieId:{
//     type:String,
//     required:true,
//     trim:true,
//    }, 
//    rate:{
//     type:Number,
//     required:true,
//    }
// },
//     { timestamps: true }
// )

// const Rating=new mongoose.model("Rating",RatingSchema)

// module.exports=Rating






