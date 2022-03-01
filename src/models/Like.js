const mongoose = require("mongoose")

const LikeMovieSchema = mongoose.Schema({
    movieId: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: String,
        required: true,
        trim: true
    },
    
}
)

const LikeMovie = new mongoose.model("LikeMovie", LikeMovieSchema)

module.exports = LikeMovie






