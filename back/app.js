const express = require("express")
const app = express()
require("dotenv").config()
const mongoDb = require("./db/db") 
const bodyParser = require("body-parser")
const routeUser = require("./Routes/userRoute")
const routePoste = require("./Routes/posteRoute")
const path = require("path");

app.use(bodyParser.json())
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
})

app.use("/images/", express.static(path.join(__dirname, "images")))
app.use("/api/auth", routeUser)
app.use("/api/poste", routePoste)
module.exports = app
