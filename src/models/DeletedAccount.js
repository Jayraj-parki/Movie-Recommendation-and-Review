const mongoose = require("mongoose")

const DeleteUserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    reason: {
        type: String,
        required: true,
        trim: true
    },
    
}
)

const DeleteUser = new mongoose.model("DeleteUser", DeleteUserSchema)

module.exports = DeleteUser






