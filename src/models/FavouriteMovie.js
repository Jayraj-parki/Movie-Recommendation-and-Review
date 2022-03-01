const mongoose = require("mongoose")

const FavouriteMovieSchema = mongoose.Schema({
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

const FavouriteMovie = new mongoose.model("FavouriteMovie", FavouriteMovieSchema)

module.exports = FavouriteMovie






