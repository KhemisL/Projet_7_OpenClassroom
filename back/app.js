const express = require("express")
const app = express()
require("dotenv").config()
const mongoDb = require("./db/db") 
const bodyParser = require("body-parser")
const routeUser = require("./Routes/userRoute")
const routePoste = require("./Routes/posteRoute")
const cookieParser = require("cookie-parser")
const {checkUser, requireAuth} = require("./midleware/auth")
const path = require("path");
const cors = require("cors")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cookieParser())
app.use(cors({origin: true, credentials: true}));


app.get("*", checkUser)
app.get("/jwtid", requireAuth, (req, res)=>{
    res.status(200).send(res.locals.user._id)
})

app.use("/images/", express.static(path.join(__dirname, "images")))
app.use("/api/auth", routeUser)
app.use("/api/poste", routePoste)
module.exports = app
