const mongoose = require("mongoose")

const Schema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, "A user must have a name"],
         trim: true,
      },
      mac: {
         type: String,
         required: [true, "A user must have a MAC-Address"],
         trim: true,
         unique: true,
      },
      role: {
         type: String,
         required: [true, "A user must have a role"],
         trim: true,
         default: "public",
      },
      description: {
         type: String,
         trim: true,
      },
      tag: {
         type: String,
         trim: true,
      },
      date: {
         type: Number,
      },
   },
   {
      versionKey: false,
   }
)

module.exports = mongoose.model("User", Schema)
