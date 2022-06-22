const mongoose = require("mongoose")



const posteSchema = mongoose.Schema({
    userId: {type: String},
    description: {type:String},
    imageUrl: {type: String},
    likes: {type: Number},
    usersLiked: [String],
},
{
    timestamps : true
}
)


module.exports = mongoose.model("Poste",posteSchema)