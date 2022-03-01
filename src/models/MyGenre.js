const mongoose = require("mongoose")

const MyGenreSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: Array,
        default:[]
    },
    
}
)

const MyGenre = new mongoose.model("MyGenre", MyGenreSchema)

module.exports = MyGenre






