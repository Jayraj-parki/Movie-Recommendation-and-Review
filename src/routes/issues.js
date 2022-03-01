const router = require("express").Router()
const IssuesOfUser = require("../models/IssueOfuser")
const User = require("../models/User")
const validator = require("validator")
const bcrypt = require('bcryptjs')
// // add issue of user
router.post("/submitIssue", async (req, res) => {
    try {
        const { email, password, issue } = req.body
        if (!email || !issue || !password) {
            return res.status(400).json("plz fill all the field")
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json("Enter a valid email")
        }
        else {
            const userAccount = await User.findOne({ email: email })
            if (userAccount) {
                const isMatch = await bcrypt.compare(password, userAccount.password)
                if (!isMatch) {
                    return res.status(400).json("Invalid credential")
                }
                const issueSaved = await IssuesOfUser({ email, issue })
                await issueSaved.save()
                res.status(200).json("Your Issue Submitted Successfully")
            }
            else {
                return res.status(400).json("Invalid credential")
            }
        }
    }
    catch (err) {
        console.log("Error in submitting issue" + err)
    }
})
router.post("/submitMessage", async (req, res) => {
    try {
        const { email, issue } = req.body
        if (!email || !issue) {
            return res.status(400).json("plz fill all the field")
        }
        else if (!validator.isEmail(email)) {
            return res.status(422).json("Enter a valid email")
        }
        else {

            const issueSaved = await IssuesOfUser({ email, issue })
            await issueSaved.save()
            res.status(200).json("Your Issue Submitted Successfully")

        }
    }
    catch (err) {
        console.log("Error in submitting Message" + err)
    }
})

// get all issue
router.get("/getAll", async (req, res) => {
    try {
        const result = await IssuesOfUser.find()
        res.status(200).json(result)

    }

    catch (err) {
        console.log("Error in submitting issue" + err)
    }
})






module.exports = router

