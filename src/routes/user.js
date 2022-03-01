const router = require("express").Router()
const User = require("../models/User")
const authentication = require("../auth/authentication")
const validator = require("validator")
const bcrypt = require('bcryptjs')
const DeleteUser=require("../models/DeletedAccount")
const FavouriteMovie = require("../models/FavouriteMovie")
const LikeMovie = require("../models/Like")
const MyGenre=require("../models/MyGenre")
const Rating = require("../models/Rating")
const Review=require("../models/Review")
// Register user
router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ err: "PLz fill all the field properties " })
    }
    else if (!validator.isEmail(email)) {
        return res.status(422).json({ err: "Enter a valid email" })
    }
    else {
        try {
            const userExist = await User.findOne({ email: email })
            if (userExist) {
                return res.status(422).json({ err: "Email already exists" })
            }
            else {
                const user = new User({ email, username, password })
                await user.save()
                return res.status(201).json({ msg: "Registered Successfully" })
            }

        }
        catch (err) {
            res.status(500).json(err)
        }
    }

})


// Login user
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ err: "plz fill the data" })
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json({ err: "Enter a valid email" })
        }
        else {
            const userAccount = await User.findOne({ email: email })
            if (userAccount) {
                const isMatch = await bcrypt.compare(password, userAccount.password)
                if (!isMatch) {
                    return res.status(400).json({ err: "Invalid credential" })
                }
                const token = await userAccount.generateToken();
                res.cookie("jwttoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                })
                return res.status(201).json({ msg: "User login successfully", user: userAccount })
            }
            else {
                return res.status(400).json({ err: "Invalid credential" })
            }
        }
    }
    catch (err) {
        console.log("Error in login" + err)
    }
})


// logout user
router.patch("/logout", authentication, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.userID })
        req.rootUser.tokens = []
        res.clearCookie("jwttoken", { path: "/" })
        await req.rootUser.save()
        res.status(201).json("user logout successfully")
    }
    catch (err) {
        res.status(404).json("Opps! Something went Wrong")
    }
})

// get authentication
router.get("/userData", authentication, async (req, res) => {
    try {
        res.status(201).json({ user: req.rootUser })
    }
    catch (err) {
        res.status(404).json({ err: "No user logged in" })
    }
})

// get all User
router.get("/all", async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
// get deleted
router.get("/deletedSavedAccount", async (req, res) => {
    try {
        const user = await DeleteUser.find()
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// count of Users
router.get("/count", async (req, res) => {
    try {
        const user = await User.find().count();
        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})


//get specific User 
router.get("/specific/:id", async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id }, { password: 0, createdAt: 0, updatedAt: 0, tokens: 0 })

        res.status(200).json(user)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// update User
// router.patch("/update/:id", async (req, res) => {
//     const _id = req.params.id
//     try {
//         const user = await User.findByIdAndUpdate(_id, { $set: req.body })
//         res.status(200).json("User Updated Successfully")
//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })
// updtate email of user 
router.patch("/updateEmail/:id", async (req, res) => {
    try {
        const { oldEmail, newEmail, password } = req.body
        if (!oldEmail || !newEmail || !password) {
            return res.status(400).json("plz fill the data")
        }
        else if (!validator.isEmail(newEmail)) {
            return res.status(422).json("Enter a valid email")
        }
        else {
            const newEmailID = await User.findOne({ email: newEmail })
            if(newEmailID){
                return res.status(400).json("New Email is already registered")
            }
            const userAccount = await User.findOne({ $and:[{_id:req.params.id},{email: oldEmail}] })
            if (userAccount) {
                const isMatch = await bcrypt.compare(password, userAccount.password)
                if (!isMatch) {
                    return res.status(400).json("Invalid credential" )
                }
                const user = await User.findByIdAndUpdate(req.params.id, { $set: { email: newEmail } })
                res.status(200).json({user:{...userAccount._doc,email:newEmail},msg:"User's Email Updated Successfully"})
            } 
            else {
                return res.status(400).json("Invalid credential" )
            }
        }
    }
    catch (err) {
        console.log("Error in updating email" + err)
    }
})

// updtate password of user 
router.patch("/updatePassword/:id", async (req, res) => {
    try {
        const { newPassword, password } = req.body
        if (!newPassword || !password) {
            return res.status(400).json("plz fill the data")
        }
        else {
            
            const userAccount = await User.findOne({_id:req.params.id})
            if (userAccount) {
                const isMatch = await bcrypt.compare(password, userAccount.password)
                if (!isMatch) {
                    return res.status(400).json("Invalid credential" )
                }
                 const hashPass=await bcrypt.hash(newPassword,10)
                console.log(newPassword+ " "+password)
                const user = await User.findByIdAndUpdate(req.params.id, { $set: { password: hashPass } })
                res.status(200).json("User's password Updated Successfully")
            } 
            else {
                return res.status(400).json("Invalid credential" )
            }
        }
    }
    catch (err) {
        console.log("Error in updating email" + err)
    }
})

//delete user
router.delete("/deleteAccount/:id", async (req, res) => {
    try {
        const { email, password ,reason} = req.body
        if (!email||!reason || !password) {
            return res.status(400).json("plz fill all the field")
        }
        else {
            
            const userAccount = await User.findOne({$and:[{_id:req.params.id},{email:email}]})
            if (userAccount) {
                const isMatch = await bcrypt.compare(password, userAccount.password)
                if (!isMatch) {
                    return res.status(400).json("Invalid credential" )
                }
                
                await FavouriteMovie.deleteMany({userId:req.params.id})
                await LikeMovie.deleteMany({userId:req.params.id})
                await MyGenre.deleteMany({userId:req.params.id})
                await Rating.deleteMany({userId:req.params.id})
                await Review.deleteMany({userId:req.params.id})
                const saveDeleted=await DeleteUser({email,reason})
                await saveDeleted.save()

                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("Your Account deleted Successfully")
            } 
            else {
                return res.status(400).json("Invalid credential" )
            }
        }
    }
    catch (err) {
        console.log("Error in updating email" + err)
    }
})




// // delete User
// router.delete("/delete/:id", async (req, res) => {
//     const _id = req.params.id
//     try {
//         await User.findByIdAndDelete(_id)
//         res.status(200).json("User Deleted Successfully")
//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// })


module.exports = router


/*
{
    "username":"j5",
    "email":"j5@gmail.com",
    "password":"111111"
},
{
    "username":"j6",
    "email":"j6@gmail.com",
    "password":"111111"
},
{
    "username":"j7",
    "email":"j7@gmail.com",
    "password":"111111"
},
{
    "username":"j8",
    "email":"j8@gmail.com",
    "password":"111111"
},
{
    "username":"j9",
    "email":"j9@gmail.com",
    "password":"111111"
},
{
    "username":"j10",
    "email":"j10@gmail.com",
    "password":"111111"
},
{
    "username":"j11",
    "email":"j11@gmail.com",
    "password":"111111"
},
{
    "username":"j12",
    "email":"j12@gmail.com",
    "password":"111111"
},
{
    "username":"j13",
    "email":"j13@gmail.com",
    "password":"111111"
},
{
    "username":"j14",
    "email":"j14@gmail.com",
    "password":"111111"
},
{
    "username":"j15",
    "email":"j15@gmail.com",
    "password":"111111"
},
{
    "username":"j16",
    "email":"j16@gmail.com",
    "password":"111111"
},
{
    "username":"j17",
    "email":"j17@gmail.com",
    "password":"111111"
},
{
    "username":"j18",
    "email":"j18@gmail.com",
    "password":"111111"
},
{
    "username":"j19",
    "email":"j19@gmail.com",
    "password":"111111"
},
{
    "username":"j20",
    "email":"j20@gmail.com",
    "password":"111111"
},
{
    "username":"j21",
    "email":"j21@gmail.com",
    "password":"111111"
},
{
    "username":"j22",
    "email":"j22@gmail.com",
    "password":"111111"
},
{
    "username":"j23",
    "email":"j23@gmail.com",
    "password":"111111"
},
{
    "username":"j24",
    "email":"j24@gmail.com",
    "password":"111111"
},
{
    "username":"j25",
    "email":"j25@gmail.com",
    "password":"111111"
},
{
    "username":"j26",
    "email":"j26@gmail.com",
    "password":"111111"
},
{
    "username":"j27",
    "email":"j27@gmail.com",
    "password":"111111"
},
{
    "username":"j28",
    "email":"j28@gmail.com",
    "password":"111111"
},
{
    "username":"j29",
    "email":"j29@gmail.com",
    "password":"111111"
},
{
    "username":"j30",
    "email":"j30@gmail.com",
    "password":"111111"
},
{
    "username":"j31",
    "email":"j31@gmail.com",
    "password":"111111"
},
{
    "username":"j32",
    "email":"j32@gmail.com",
    "password":"111111"
},
{
    "username":"j33",
    "email":"j33@gmail.com",
    "password":"111111"
},
{
    "username":"j34",
    "email":"j34@gmail.com",
    "password":"111111"
},
{
    "username":"j35",
    "email":"j35@gmail.com",
    "password":"111111"
},
{
    "username":"j36",
    "email":"j36@gmail.com",
    "password":"111111"
},
{
    "username":"j37",
    "email":"j37@gmail.com",
    "password":"111111"
},
{
    "username":"j38",
    "email":"j38@gmail.com",
    "password":"111111"
},
{
    "username":"j39",
    "email":"j39@gmail.com",
    "password":"111111"
},
{
    "username":"j40",
    "email":"j40@gmail.com",
    "password":"111111"
},
{
    "username":"j41",
    "email":"j41@gmail.com",
    "password":"111111"
},
{
    "username":"j42",
    "email":"j42@gmail.com",
    "password":"111111"
},
{
    "username":"j43",
    "email":"j43@gmail.com",
    "password":"111111"
},
{
    "username":"j44",
    "email":"j44@gmail.com",
    "password":"111111"
},
{
    "username":"j45",
    "email":"j45@gmail.com",
    "password":"111111"
},
{
    "username":"j46",
    "email":"j46@gmail.com",
    "password":"111111"
},
{
    "username":"j47",
    "email":"j47@gmail.com",
    "password":"111111"
},
{
    "username":"j48",
    "email":"j48@gmail.com",
    "password":"111111"
},
{
    "username":"j49",
    "email":"j49@gmail.com",
    "password":"111111"
},
{
    "username":"j50",
    "email":"j50@gmail.com",
    "password":"111111"
},

*/



// ------------------------Rating

