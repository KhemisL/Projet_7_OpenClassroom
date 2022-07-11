const express = require("express")
const router = express.Router()
const posteCtrl = require("../Controllers/posteController")
const auth = require("../Midleware/auth")
const multer = require("../Midleware/multer")
const {checkUser} = require("../midleware/auth")

router.post("/" , multer,  posteCtrl.createPoste)
router.get("/",  posteCtrl.getAllPoste)
router.put("/:id", multer, posteCtrl.modifyPoste)
router.delete("/:id", posteCtrl.deletePoste)
router.post("/:id/like", posteCtrl.likePoste)
router.post("/:id/unlike", posteCtrl.unLikePoste)


module.exports = router