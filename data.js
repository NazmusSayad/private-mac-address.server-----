const fs = require("fs")
const mongoose = require("mongoose")
const Tour = require("./schema.js")

// Connect With DataBase
if (!process.env.DATABASE_URL) {
  throw new Error("Where is DATABASE TOKEN?")
}
const DB = process.env.DATABASE_URL
mongoose.connect(DB).then(() => console.log("MongoDB connected!"))

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`./data.json`, "utf-8"))

// IMPORT DATA INTO DB
const importData = async () => {
   try {
      await Tour.create(tours)
      console.log("Data successfully loaded!")
   } catch (err) {
      console.log(err)
   }
   process.exit()
}

// DELETE ALL DATA FROM DB
const deleteData = async () => {
   try {
      await Tour.deleteMany()
      console.log("Data successfully deleted!")
   } catch (err) {
      console.log(err)
   }
   process.exit()
}

if (process.argv[2] === "--i") {
   importData()
} else if (process.argv[2] === "--d") {
   deleteData()
}
