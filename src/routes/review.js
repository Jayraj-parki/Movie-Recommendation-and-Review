const router=require("express").Router()
const Review=require("../models/Review")
const Movie=require("../models/Movie")

// get all review 
router.get("/all",async(req,res)=>{
        try{
            const result=await Review.find({},{createdAt:0,updatedAt:0}) 
            res.status(200).json(result)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
 })
// get all review 
router.get("/mostReviewed",async(req,res)=>{
        try{
            // const result=await Review.find({},{createdAt:0,updatedAt:0}) 
            const result = await Review.aggregate([
                {
                    $group: { 
                       _id: "$movieId", 
                       countA: { $sum: 1}
                    }
                 },
                 {
                   $sort:{'countA':-1}
                 },
                {
                    $limit: 50
                }
            ])
            const movie=await Promise.all(
                result.map(async(val)=>{
                return {
                    movie:await Movie.findOne({_id:val._id.toString()},{title:1,poster:1}),
                }
            })) 
            res.status(200).json(movie)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
 })


//get specific review by movieID and userId
router.post("/specific/byMovieAndUser/",async(req,res)=>{
    const {userId,movieId}=req.body
    try{
        const result=await Review.find({userId,movieId}) 
        res.status(200).json(result)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})

//get specific review by movieID 
router.get("/specific/byMovie/:id",async(req,res)=>{
    try{
        const result=await Review.find({movieId:req.params.id})   
        res.status(200).json(result)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})

//get count of review for any movie by movieID 
router.get("/count/byMovie/:id",async(req,res)=>{
    try{
        const count=await Review.find({movieId:req.params.id}).count()
        res.status(200).json(count)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})
//get specific review by userID 
router.get("/specific/byUser/:id",async(req,res)=>{
    try{
        const result=await Review.find({userId:req.params.id}) 
        res.status(200).json(result)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})
//get specific review by userID with movie namw
router.get("/specific/movieName/byUser/:id",async(req,res)=>{
    try{
        const result=await Review.find({userId:req.params.id}).sort({createdAt:-1}) 
        const movie=await Promise.all(
            result.map(async(val)=>{
            return {
                movie:await Movie.findOne({_id:val.movieId.toString()},{title:1}),
                review:val?.review,
                createdAt:val?.createdAt
            }
        })) 
        res.status(200).json(movie)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})

//get count of review by userID 
router.get("/count/byUser/:id",async(req,res)=>{
    try{
        const count=await Review.find({userId:req.params.id}).count()
          
        res.status(200).json(count)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})


// // add review for movie
router.post("/add",async(req,res)=>{
        const {userId,movieId,review,username}=req.body;
        try{
            const result=new Review({userId,movieId,review,username})
            await result.save()
            res.status(200).json("Review added Successfully")
            
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// update review for movie
router.patch("/update",async(req,res)=>{
        const {_id,userId,movieId,review}=req.body;
        try{
            const result=await  Review.updateOne({$and:[{userId},{movieId},{_id}]},{$set:{review:review}})
            res.status(200).json("Review updated Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// // delete review my
router.delete("/delete/one",async(req,res)=>{
        const {userId,movieId,_id}=req.body;
        try{
            await  Review.deleteOne({$and:[{userId},{movieId},{_id}]})
            res.status(200).json("Review deleted Successfully")
        } 
        catch(err){ 
            console.log(err)
            res.status(500).json(err)
        } 
    })

// delete Reviewby ID
router.delete("/delete/id/:id",async(req,res)=>{
        try{
            await  Review.findByIdAndDelete(req.params.id)
            res.status(200).json("Review deleted Successfully")
        } 
        catch(err){ 
            console.log(err)
            res.status(500).json(err)
        } 
    })


module.exports=router