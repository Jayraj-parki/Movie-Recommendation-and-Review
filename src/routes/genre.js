const router=require("express").Router()
const Genre=require("../models/Genre")



// get all genre 
router.get("/all",async(req,res)=>{
        try{
            const genre=await Genre.find() 
            res.status(200).json(genre)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
})
// get count of genre 
router.get("/allGenreCount",async(req,res)=>{
        try{
            const genre=await Genre.find().count() 
            res.status(200).json(genre)
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
})
// get specific genre names 
router.post("/genreNames",async(req,res)=>{
    const {genres}=req.body
        try{
            const genre=await Genre.find({_id:{$in:genres}}) 
            res.status(200).json(genre)
        } 
        catch(err){ 
            console.log(err)
            res.status(500).json(err)
        } 
})



//get specific genre 
router.get("/specific/:id",async(req,res)=>{
    try{
        const genre=await Genre.findOne({_id:req.params.id}) 
        res.status(200).json(genre)
    } 
    catch(err){ 
        res.status(500).json(err)
    } 
})


// add genre
router.post("/add",async(req,res)=>{
        const {genre}=req.body;
        try{
            const checkExist=await Genre.findOne({genre})
            if(checkExist){
                res.status(404).json("Genre Already Added")
            }
            else{

                const result=new Genre({genre})
                await result.save()
                res.status(200).json("Genre Uploaded Successfully")
            }
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// update genre
router.patch("/update/:id",async(req,res)=>{
        const _id=req.params.id
        // console.log(req.body)
        try{
           await Genre.findByIdAndUpdate(_id,{$set:req.body})
            res.status(200).json("Genre Updated Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })

// delete genre
router.delete("/delete/:id",async(req,res)=>{
        const _id=req.params.id
        try{
            await Genre.findByIdAndDelete(_id)
            res.status(200).json("Genre Deleted Successfully")
        } 
        catch(err){ 
            res.status(500).json(err)
        } 
    })


module.exports=router