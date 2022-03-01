const mongoose = require("mongoose")
let arr = ["Nice movie", "i loved the actors of this movie", "wow, what a movie", "very good performed", "blockbaster movie", "superb movie", "flop movie for me", "i didn't like a single scene", "there was no action in this movie", "i watched this movie 10 times but still i love to watch this movie", "full waste of time", "i hate this movie", "wowwwwwwww", "i think this movie will break all records", "movie was very bad", "what a movie!", "i dont want to watch this movie further", "i never seen such a amazing movie", "this movie should banned", "I cannot express how much I thoroughly enjoyed this movie", "It was a cinematic masterpiece that gave so much nostalgia", "I'm Speechless & Overwhelmed.", "No amount of words can describe the emotions i felt today", "This is one of the greatest fan service I've ever witnessed.", " one of the greatest movie I have ever seen.", "absolutely loved this movie I will say the first half hour felt kinda slow and took a bit to get the ball rolling but once it did IT NEVER STOPPED!", "Likh de i was not expecting it should have been more amaze", "I expected it to be more mind boggling movie but it not reached my expectation", "ohhhhh what a movie", "mind blowing movie", "3rd class movie", "full waste of time", "i loved the actions scene", "i loved romantic scenes", "what a script written by writer:)", "flop movie", "not expected from actor to act in such a great way", "i dont hace a word to say about this mnd blowing movie", "ghatiya movie", "Amazing", "0/10", "100/10", "loved so much", " i am big fan of this movie", "i loved this movie", "Not for below 18+", "below than expected", "sorry to say but this was full waste of time", "waiting for new movie", "superb movie"]

const ReviewSchema = mongoose.Schema({
   userId:{
       type:String,
       required:true,
       trim:true,
   },
   username:{
       type:String,
       required:true,
       trim:true,
   },
   movieId:{
    type:String,
    required:true,
    trim:true,
   },
   review:{
    type:String,
    required:true,
    trim:true,
    default:arr[Math.ceil((Math.random(0,49)*49))]
   }
},
    { timestamps: true }
)

const Review=new mongoose.model("Review",ReviewSchema)

module.exports=Review






