const express=require('express')
const path=require('path')
require('dotenv').config({path:"./config.env"})
const PORT=process.env.PORT || 5000
const helmet=require("helmet")
const morgan=require("morgan")
const cookieparser=require("cookie-parser")

const app=express()
app.use(express.json())
app.use(cookieparser())

//importing routes
const movieRoute=require("./routes/movie")
const genreRoute=require("./routes/genre")
const userRoute=require("./routes/user")
const ratingRoute=require("./routes/rating")
const favouriteMovieRoute=require("./routes/favouriteMovie")
const likeMovieRoute=require("./routes/like")
const myGenreRoute=require("./routes/myGenre")
const reviewRoute=require("./routes/review")
const allRoute=require("./routes/all")
const issueRoute=require("./routes/issues")
// connection
require("./db/conn")

// routing
// app.use("/api/movie",movieRoute)
// app.use("/api/genre",genreRoute)
// app.use("/api/user",userRoute)
// app.use("/api/rating",ratingRoute)
// app.use("/api/favouriteMovie",favouriteMovieRoute)
// app.use("/api/like",likeMovieRoute)
// app.use("/api/myGenre",myGenreRoute)
// app.use("/api/review",reviewRoute)
// app.use("/api/allData",allRoute)
// app.use("/api/issues",issueRoute)

app.use("/movie",movieRoute)
app.use("/genre",genreRoute)
app.use("/user",userRoute)
app.use("/rating",ratingRoute)
app.use("/favouriteMovie",favouriteMovieRoute)
app.use("/like",likeMovieRoute)
app.use("/myGenre",myGenreRoute)
app.use("/review",reviewRoute)
app.use("/allData",allRoute)
app.use("/issues",issueRoute)

app.use(express.static(path.join(__dirname,"../frontend/build")));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,"../frontend/build", "index.html"));
  });

if(process.env.NODE_ENV=="production"){
    app.use(express.static("frontend/build"))
}

// "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend"
 
 
app.listen(PORT,()=>{
    console.log("listening at "+PORT)
}) 
