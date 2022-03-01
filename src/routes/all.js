const router = require("express").Router()
const Movie = require("../models/Movie")
const Rating=require("../models/Rating")
const User = require("../models/User")
const Review = require("../models/Review")


let arr = ["Nice movie", "i loved the actors of this movie", "wow, what a movie", "very good performed", "blockbaster movie", "superb movie", "flop movie for me", "i didn't like a single scene", "there was no action in this movie", "i watched this movie 10 times but still i love to watch this movie", "full waste of time", "i hate this movie", "wowwwwwwww", "i think this movie will break all records", "movie was very bad", "what a movie!", "i dont want to watch this movie further", "i never seen such a amazing movie", "this movie should banned", "I cannot express how much I thoroughly enjoyed this movie", "It was a cinematic masterpiece that gave so much nostalgia", "I'm Speechless & Overwhelmed.", "No amount of words can describe the emotions i felt today", "This is one of the greatest fan service I've ever witnessed.", " one of the greatest movie I have ever seen.", "absolutely loved this movie I will say the first half hour felt kinda slow and took a bit to get the ball rolling but once it did IT NEVER STOPPED!", "Likh de i was not expecting it should have been more amaze", "I expected it to be more mind boggling movie but it not reached my expectation", "ohhhhh what a movie", "mind blowing movie", "3rd class movie", "full waste of time", "i loved the actions scene", "i loved romantic scenes", "what a script written by writer:)", "flop movie", "not expected from actor to act in such a great way", "i dont hace a word to say about this mnd blowing movie", "ghatiya movie", "Amazing", "0/10", "100/10", "loved so much", " i am big fan of this movie", "i loved this movie", "Not for below 18+", "below than expected", "sorry to say but this was full waste of time", "waiting for new movie", "superb movie"]
// get all genre 
router.get("/all",async(req,res)=>{
    

    try{
            // const movie=await Movie.find({},{_id:1}).skip(Math.ceil((Math.random(1,539)*539))).limit(Math.ceil((Math.random(200,539)*539)))
            // user="6214f033463d54952a5c7374"
            // const name=await User.findOne({_id:user},{username:1,_id:0})
            // movie.map(async(val)=>{
            //         // console.log(val._id.toString())
            //         //  const result=new Review({userId,movieId,review,username})
 
            //         const result=await Review.insertMany(
            //             {
            //                 "userId": user, 
            //                 "movieId":val._id.toString(),
            //                 "review":arr[Math.ceil((Math.random(1,49)*49))],
            //                 "username":name.username
            //             }
            //         )
 
            //     }) 
            console.log(await Rating.find().count())
                res.status(200).json("done")
        } 
        catch(err){ 
            console.log("hiii2")
            res.status(500).json(err)
        } 
    })
 

module.exports = router
// router.get("/all", async (req, res) => {


//     try {
//         console.log("hi")
//         await Review.deleteMany();
//         res.status(200).json("done")
//     }
//     catch (err) {
//         console.log("hiii2")
//         res.status(500).json(err)
//     }
// })