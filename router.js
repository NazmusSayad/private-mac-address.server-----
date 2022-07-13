const express = require("express")
const Controller = require("./controler.js")

const router = express.Router()

router.route("/").get(Controller.getList).post(Controller.createUser)

router.route("/:id").patch(Controller.updateUser).delete(Controller.deleteUser)

module.exports = router
