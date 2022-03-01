const router = require("express").Router()
const Rating = require("../models/Rating")
const Movie = require("../models/Movie")


// // get all rating 
router.get("/all", async (req, res) => {
    try {
        const rate = await Rating.find({}, { createdAt: 0, updatedAt: 0 })
        res.status(200).json(rate)
    }
    catch (err) {
        res.status(500).json(err)
    }
})



//get specific rating by movieID and userId
router.post("/specific/byMovieAndUser/", async (req, res) => {
    const { userId, movieId } = req.body
    try {
        const result = await Rating.findOne({ userId, movieId }, { rate: 1, _id: 0 })

        res.status(200).json(result)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get specific rating by movieID 
router.get("/specific/byMovie/:id", async (req, res) => {
    try {
        const rate = await Rating.find({ movieId: req.params.id })

        res.status(200).json(rate)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get avg rating by movieID 
router.get("/avgRating/byMovie/:id", async (req, res) => {
    try {
        // const rate = await Rating.find({ movieId: req.params.id })
        const result = await Rating.aggregate([
            {
                $match:{movieId:req.params.id}
            }
            ,{
                $group: { _id: "$movieId", rate: { $avg: "$rate" },countA: { $sum: 1 } }
            },
           
        ])
        // console.log(result)
        res.status(200).json(result[0])
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
//get group rating by movieID 
router.get("/grpRating/byMovie/:id", async (req, res) => {
    try {
        // const rate = await Rating.find({ movieId: req.params.id })
        const result = await Rating.aggregate([
            {
                $match:{movieId:req.params.id}
            }
            ,{
                $group: { _id: "$rate",countA: { $sum: 1 } }
            },
            {
                $sort:{_id:-1}
            }
           
        ])
        // console.log(result)
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//get count of rating for any movie by movieID 
router.get("/count/byMovie/:id", async (req, res) => {
    try {
        const count = await Rating.find({ movieId: req.params.id }).count()

        res.status(200).json(count)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get specific rating by userID 
router.get("/specific/byUser/:id", async (req, res) => {
    try {
        const rate = await Rating.find({ userId: req.params.id }).limit(100)

        res.status(200).json(rate)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//get specific rating by userID 
router.get("/specific/movieName/byUser/:id", async (req, res) => {
    try {
        const result = await Rating.find({ userId: req.params.id }).limit(100)
        const movie = await Promise.all(
            result.map(async (val) => {
                return {
                    movie: await Movie.findOne({ _id: val.movieId.toString() }, { title: 1, poster: 1 }),
                    rate: val.rate
                }
            }))
        // console.log(movie)
        res.status(200).json(movie)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//get count of rating for any movie by userID 
router.get("/count/byUser/:id", async (req, res) => {
    try {
        const count = await Rating.find({ userId: req.params.id }).count()
        res.status(200).json(count)
    }
    catch (err) {

        res.status(500).json(err)
    }
})


// add rating for movie
router.post("/add",async(req,res)=>{
        const {userId,movieId,rate}=req.body;
        try{
            const checkRating=await Rating.findOne({$and:[{userId},{movieId}]})
            if(checkRating){
                res.status(404).json("Already rated to movie")
            }
            else{

                const result=new Rating({userId,movieId,rate})
                await result.save()
                res.status(200).json("Rating added Successfully")
            }
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// router.post("/add", async (req, res) => {
//     const { userId, movieId, rate } = req.body;
//     try {
//         const result = await Rating.insertMany(req.body)

//         res.status(200).json("Rating added Successfully")

//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })
// // update rating for movie
router.patch("/update", async (req, res) => {
    const { userId, movieId, rate } = req.body;
    try {
        const result = await Rating.updateOne({ userId, movieId }, { $set: { rate: rate } })
        res.status(200).json("Rating updated Successfully")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// // delete rating for movie by byMovieAndUser
router.delete("/delete/byMovieAndUser", async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        await Rating.deleteOne({ userId, movieId })
        res.status(200).json("Rating deleted Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// // delete rating for movie by  rating ID
router.delete("/delete/:id", async (req, res) => {
    try {
        await Rating.findByIdAndDelete(req.params.id)
        res.status(200).json("Rating deleted Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
// // delete rating for movie by  movie ID
router.delete("/deleteByMovieId/:id", async (req, res) => {
    try {
        const result = await Rating.deleteMany({ movieId: req.params.id })
        console.log(result)
        res.status(200).json("Rating deleted Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.delete("/deleteAllRating", async (req, res) => {
    try {
        const result = await Rating.deleteMany({})
        console.log(result)
        res.status(200).json("Rating deleted Successfully")
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get("/topRatedMovies", async (req, res) => {
    try {
        // { $match: { salary : { $gt: 2000} } },
        const result = await Rating.aggregate([
            {
                $group: { _id: "$movieId", rate: { $avg: "$rate" } }
            },
            {
                $sort: { rate: -1 }
            },
            {
                $limit: 5
            }
        ])
        res.status(200).json(result)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})




module.exports = router