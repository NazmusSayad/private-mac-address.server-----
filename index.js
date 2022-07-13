console.clear()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const router = require("./router.js")
const app = express()
const auth = {
   username: "NazmusSayad",
   password: "yoboi",
}

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
   const AuthUsername = auth.username.toLowerCase()
   const AuthPassword = auth.password

   const ReqUsername = req?.headers?.username?.toLowerCase()
   const ReqPassword = req?.headers?.password

   if (AuthUsername === ReqUsername && AuthPassword === ReqPassword) {
      next()
   } else {
      res.status(404).json({
         status: "fail",
         message: "Wrong auth token",
      })
   }
})
app.use("/api", router)

// Connect With DataBase
if (!process.env.DATABASE_URL) {
  throw new Error("Where is DATABASE TOKEN?")
}

const DB = process.env.DATABASE_URL
mongoose.connect(DB).then(() => console.log("MongoDB connected!"))

// Start Server
const port = process?.env?.PORT || 80
app.listen(port, () => {
   console.log(`App running on port ${port}...`)
})
