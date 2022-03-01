const mongoose = require("mongoose")

const IssuesOfUserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    issue: {
        type: String,
        required: true,
        trim: true
    },
},
{ timestamps: true }
)

const IssuesOfUser = new mongoose.model("IssuesOfUser", IssuesOfUserSchema)

module.exports = IssuesOfUser






