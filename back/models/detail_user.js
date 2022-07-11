const mongoose = require("mongoose")
const muv = require("mongoose-unique-validator")


const userSchema = mongoose.Schema({
    lastName: {type: String,  required: true},
    firstName: {type: String, required: true},
    pseudo: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true, max: 1024, minlength: 6},
})


userSchema.plugin(muv)
module.exports = mongoose.model("User",userSchema)

