const mongoose = require("mongoose")


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@api-groupomania.hsmn4.mongodb.net/${process.env.DB_NAME_DATABASE}?retryWrites=true&w=majority`)
.then(()=> console.log("Connect Succes"))
.catch(()=> console.log("Connect Failed"))


module.exports = mongoose