const express = require("express")
const router = express.Router()
const userCtrl = require("../Controllers/userController")

router.post("/signup", userCtrl.signup)
router.post("/login", userCtrl.login)
router.get("/logout", userCtrl.logout)
router.get("/:id", userCtrl.getOneUser)
router.get("/", userCtrl.getAllUser)
router.put("/:id", userCtrl.modifyUser)

module.exports = router