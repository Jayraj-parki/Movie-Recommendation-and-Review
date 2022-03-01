const router = require("express").Router()
const FavouriteMovie = require("../models/FavouriteMovie")
// // add rating for movie
const Movie = require("../models/Movie")

router.post("/addToMyFavorutieMovie", async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        const result = new FavouriteMovie({ userId, movieId })
        await result.save()
        res.status(200).json("FavouriteMovie added Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



// // get all favourite movie 
router.get("/all", async (req, res) => {
    try {
        const favMovies = await FavouriteMovie.find({}, { createdAt: 0, updatedAt: 0 })
        res.status(200).json(favMovies)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// // check movie is my favourite movie  or not
router.post("/checkForFav", async (req, res) => {
    const { userId, movieId } = req.body
    try {
        const favMovies = await FavouriteMovie.findOne({ $and: [{ userId }, { movieId }] })
        if(favMovies){
            res.status(200).json(true)
        } 
        else{
            res.status(200).json(false)
        }
        
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



//get specific favMovie by movieID and userId
router.post("/specific/byMovieAndUser/", async (req, res) => {
    const { userId, movieId } = req.body
    try {
        const result = await FavouriteMovie.findOne({ userId, movieId })

        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


//get specific favMovie by movieID 
router.get("/specific/byMovie/:id", async (req, res) => {
    try {
        const result = await FavouriteMovie.find({ movieId: req.params.id })

        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//get count of fav  movie by movieID 
router.get("/count/byMovie/:id", async (req, res) => {
    try {
        const count = await FavouriteMovie.find({ movieId: req.params.id }).count()

        res.status(200).json(count)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get specific fav movie by userID 
router.get("/specific/byUser/:id", async (req, res) => {
    try {
        const result = await FavouriteMovie.find({ userId: req.params.id })

        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get all fav movie by userID 
router.get("/all/byUser/:id", async (req, res) => {
    try {
        const result = await FavouriteMovie.find({ userId: req.params.id })
        const movie = await Promise.all(
            result.map(async (val) => {
                return await Movie.findOne({ _id: val.movieId.toString() }, { title: 1, poster: 1 })
            }
            )
        )
        res.status(200).json(movie)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get count of fav movie  by userID 
router.get("/count/byUser/:id", async (req, res) => {
    try {
        const count = await FavouriteMovie.find({ userId: req.params.id }).count()

        res.status(200).json(count)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



// // remove movie from FavList
router.delete("/remove/byMovieAndUser", async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        await FavouriteMovie.deleteOne({ userId, movieId })
        res.status(200).json("Movie removed Successfully from favourite List")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// // delete rating for movie by  rating ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const result = await FavouriteMovie.findByIdAndDelete(req.params.id)
        // console.log(result)
        res.status(200).json("Movie deleted from List Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router