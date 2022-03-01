const mongoose = require("mongoose")

const GenreSchema = mongoose.Schema({
    genre: {
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
}
)

const Genre=new mongoose.model("Genre",GenreSchema)
module.exports=Genre






