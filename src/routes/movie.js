const router=require("express").Router()
const Movie=require("../models/Movie")
const Rating = require("../models/Rating")
const MyGenre=require("../models/MyGenre")


// get all movie 
router.get("/all",async(req,res)=>{
        try{
            const movie=await Movie.find({},{createdAt:0,updatedAt:0}) 
            res.status(200).json(movie)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })
// get count of movie 
router.get("/allMovieCount",async(req,res)=>{
        try{
            const movie=await Movie.find().count() 
            res.status(200).json(movie)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })
    // get allMovie for search
router.get("/getForSearch",async(req,res)=>{
        try{
            const movie=await Movie.find({},{title:1}) 
            res.status(200).json(movie)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

 

//get specific movie 
router.get("/specific/:id",async(req,res)=>{
    try{
        const movie=await Movie.findOne({_id:req.params.id})     
        res.status(200).json(movie)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})

//get latest 30 movie 
router.get("/latest",async(req,res)=>{
    try{
        const movie=await Movie.find().sort({createdAt:-1}).limit(30); 
        res.status(200).json(movie)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})

//get latest 5 movie 
router.get("/latest/intro",async(req,res)=>{
    try{
        const movie=await Movie.find().sort({createdAt:-1}).limit(5); 
        res.status(200).json(movie)
    } 
    catch(err){ 
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

        const movie=await Promise.all(
            result.map(async(val)=>{
            return {
                movie:await Movie.findOne({_id:val._id.toString()},{title:1,poster:1}),
                rate:val.rate.toFixed(1)
            }
        })) 
        res.status(200).json(movie)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
router.get("/topRatedMovies/all", async (req, res) => {
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
                $limit: 50
            }
        ])

        const movie=await Promise.all(
            result.map(async(val)=>{
            return {
                movie:await Movie.findOne({_id:val._id.toString()},{title:1,poster:1}),
                rate:val.rate.toFixed(1)
            }
        })) 
        res.status(200).json(movie)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

// recommend Movie
router.get("/myRecommendedMovie/:id", async (req, res) => {
    try {
        // { $match: { salary : { $gt: 2000} } },
        const result=await MyGenre.findOne({userId:req.params.id},{_id:0,genre:1}) 
        if(result){

            const {genre}=result
            const topRated = await Rating.aggregate([
                {
                    $group: { _id: "$movieId", rate: { $avg: "$rate" } }
                },
                {
                    $sort: { rate: -1 }
                },
            ])
            const ids=topRated.map((val)=>{
                return val._id
            })
            const movie=await Movie.find({$and:[{genre:{$in:genre}},{_id:{$in:ids}}]},{title:1,poster:1}).limit(100)
            
            res.status(200).json(movie)
        }
        else{
            res.status(200).json([])

        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
  


//get movie by genre  
router.get("/genre/:genreArr",async(req,res)=>{
    const {genreArr}=req.params
    
    try{
        const movie=await Movie.find({genre:{ "$in" : genreArr}}); 
        res.status(200).json(movie)
    } 
    catch(err){ 
        res.status(500).json(err) 
    } 
})
//get 5 movie by genre
router.get("/genre/intro/:genreArr",async(req,res)=>{
    const {genreArr}=req.params
    
    try{
        const movie=await Movie.find({genre:{ "$in" : genreArr}}).limit(5) 
        res.status(200).json(movie)
    } 
    catch(err){ 
        res.status(500).json(err) 
    } 
})
//get movie by language  
router.get("/language/:language",async(req,res)=>{
    const language=req.params.language
    try{
        const movie=await Movie.find({language}).sort({createdAt:-1}); 
        res.status(200).json(movie)
    } 
    catch(err){ 
        console.log(err)
        res.status(500).json(err)
    } 
})
//get movie by other language  
router.get("/otherLanguage",async(req,res)=>{
    const other=["hindi","english"]
    try{
        const movie=await Movie.find({language:{$not:{$in:other}}}); 
        res.status(200).json(movie)
    } 
    catch(err){ 
        console.log(err)
        res.status(500).json(err)
    } 
})
//get movie count 
router.get("/count",async(req,res)=>{
   
    try{
        const movie=await Movie.find({}).count(); 
        res.status(200).json(movie)
    } 
    catch(err){ 
        console.log(err)
        res.status(500).json(err)
    } 
})

// add single movie
router.post("/add",async(req,res)=>{
        const {title,release_date,language,overview,genre,poster}=req.body;
        try{
            const movie=new Movie({title,release_date,language,overview,genre,poster})
            await movie.save()
            res.status(200).json("Movie Uploaded Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// add multple movie
router.post("/add/all",async(req,res)=>{
         try{
            const movie=await  Movie.insertMany(req.body)
            res.status(200).json("All Movie Uploaded Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// update movie
router.patch("/update/:id",async(req,res)=>{
        const _id=req.params.id
        try{
            const movie=await Movie.findByIdAndUpdate(_id,{$set:req.body})
            res.status(200).json("Movie Updated Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// delete movie
router.delete("/delete/:id",async(req,res)=>{
        const _id=req.params.id
        try{
            await Movie.findByIdAndDelete(_id)
            res.status(200).json("Movie Deleted Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })


module.exports=router