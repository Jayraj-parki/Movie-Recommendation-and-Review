const router=require("express").Router()
const MyGenre=require("../models/MyGenre")
const Genre=require("../models/Genre")


// get all genre 
router.get("/genre/all",async(req,res)=>{
        try{
            const result=await MyGenre.find() 
            res.status(200).json(result)
        } 
        catch(err){ 
            // console.log(err)
            res.status(500).json(err)
        } 
    })

// delete all genre 
router.delete("/delete/all",async(req,res)=>{
        try{
            const result=await MyGenre.deleteMany({}) 
            res.status(200).json("deleted all")
        } 
        catch(err){ 
            // console.log(err)
            res.status(500).json(err)
        } 
    })

// delete from my genre 
router.patch("/delete/one",async(req,res)=>{
    const {userId,oldGenre}=req.body
        try{
           await MyGenre.updateOne({userId},{$pull:{genre:oldGenre}}) 
            res.status(200).json("deleted succefully")
        } 
        catch(err){ 
            // console.log(err)
            res.status(500).json(err)
        } 
    })

// get my genre 
// router.get("/genre/:id",async(req,res)=>{
//         try{
//             const result=await MyGenre.find({userId:req.params.id}) 
//             // const ans=await Genre.find()
//             res.status(200).json(result)
//         } 
//         catch(err){ 
//             console.log(err)
//             res.status(500).json(err)
//         } 
// })
router.get("/genre/:id",async(req,res)=>{
        try{
            const result=await MyGenre.findOne({userId:req.params.id},{_id:0,genre:1}) 
            // console.log(result)
            // const {genre}=result
            // const ans=await Genre.find({_id:{$in:genre}},{_id:0,genre:1})
            res.status(200).json(result?.genre)
        } 
        catch(err){ 
            // console.log(err)
            res.status(500).json(err)
        } 
})



// update mygenre 
router.post("/addToGenre",async(req,res)=>{
        const {userId,newGenre}=req.body
        try{
            const checkPrevData=await MyGenre.findOne({userId})
            if(checkPrevData){
                if(checkPrevData.genre.includes(newGenre)){
                    res.status(404).json("already added");
                }
                else{
                    await MyGenre.updateOne({userId},{$push:{genre:newGenre}})
                    res.status(200).json("Genre added Successfully")
                }
                
            }
            else{
                const data=new MyGenre({userId,genre:newGenre})
                await data.save();
                res.status(200).json("Genre added Successfully")
            }
        } 
        catch(err){  
            // console.log(err)
            res.status(500).json(err)
        } 
    })



module.exports=router