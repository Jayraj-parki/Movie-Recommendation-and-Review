const mongoose=require("mongoose")

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Connected Successfully")
})
.catch((err)=>{
    console.log("Connection Failed")
})