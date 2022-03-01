const router = require("express").Router()
const LikeMovie = require("../models/Like")
const Movie = require("../models/Movie")
// // add rating for movie
router.post("/addToLikedMovie", async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        const result = new LikeMovie({ userId, movieId })
        await result.save()
        res.status(200).json("LikeMovie added Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



// get all Like movie 
router.get("/all", async (req, res) => {
    try {
        const likedMovies = await LikeMovie.find({}, { createdAt: 0, updatedAt: 0 })
        res.status(200).json(likedMovies)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// get most  Liked movie 
router.get("/mostLiked", async (req, res) => {
    try {
        // const likedMovies=await LikeMovie.find({},{createdAt:0,updatedAt:0}) 
        const result = await LikeMovie.aggregate([
            {
                $group: {
                    _id: "$movieId",
                    countA: { $sum: 1 }
                }
            },
            {
                $sort: { 'countA': -1 }
            },
            {
                $limit: 50
            }
        ])
        const movie = await Promise.all(
            result.map(async (val) => {
                return {
                    movie: await Movie.findOne({ _id: val._id.toString() }, { title: 1, poster: 1 }),
                }
            }))

        res.status(200).json(movie)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//get specific likdd movie by movieID and userId
router.post("/specific/byMovieAndUser/", async (req, res) => {

    const { userId, movieId } = req.body
    try {
        const result = await LikeMovie.findOne({ $and: [{ userId }, { movieId }] })
        if (result) {
            res.status(200).json(true)
        }
        else {
            res.status(200).json(false)
        }

    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


//get specific liked movie by movieID 
router.get("/specific/byMovie/:id", async (req, res) => {
    try {
        const result = await LikeMovie.find({ movieId: req.params.id })

        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//get count of rating for any movie by movieID 
router.get("/count/byMovie/:id", async (req, res) => {
    try {
        const count = await LikeMovie.find({ movieId: req.params.id }).count()

        res.status(200).json(count)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get specific liked movie by userID 
router.get("/specific/byUser/:id", async (req, res) => {
    try {
        const result = await LikeMovie.find({ userId: req.params.id })

        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//get count of liked movie for any movie by userID 
router.get("/count/byUser/:id", async (req, res) => {
    try {
        const count = await LikeMovie.find({ userId: req.params.id }).count()

        res.status(200).json(count)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



// // remove movie from liked list
router.delete("/remove/byMovieAndUser", async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        await LikeMovie.deleteOne({ userId, movieId })
        res.status(200).json("Movie removed Successfully from Like List")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// // delete rating for movie by  liked ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const result = await LikeMovie.findByIdAndDelete(req.params.id)
        console.log(result)
        res.status(200).json("Movie deleted from List Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})



module.exports = router

