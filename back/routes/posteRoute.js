const express = require("express")
const router = express.Router()
const posteCtrl = require("../Controllers/posteController")
const auth = require("../Midleware/auth")
const multer = require("../Midleware/multer")

router.post("/",auth, multer,  posteCtrl.createPoste)
router.get("/",auth, posteCtrl.getAllPoste)
router.get("/:id",auth, posteCtrl.getOnePoste)
router.put("/:id",auth, multer, posteCtrl.modifyPoste)
router.delete("/:id",auth, posteCtrl.deletePoste)
router.post("/:id/like",auth, posteCtrl.likePoste)


module.exports = router