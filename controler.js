const Schema = require("./schema.js")

exports.getList = async (req, res) => {
   try {
      // EXECUTE QUERY
      const list = await Schema.find()

      // SEND RESPONSE
      res.status(200).json({
         status: "success",
         results: list.length,
         data: {
            list,
         },
      })
   } catch (err) {
      res.status(404).json({
         status: "fail",
         message: err,
      })
   }
}

exports.createUser = async (req, res) => {
   try {
      const newUser = await Schema.create(req.body)

      res.status(201).json({
         status: "success",
         data: {
            newUser,
         },
      })
   } catch (err) {
      res.status(400).json({
         status: "fail",
         message: err,
      })
   }
}

exports.updateUser = async (req, res) => {
   try {
      const user = await Schema.findByIdAndUpdate(req.params.id, req.body, {
         new: true,
         runValidators: true,
      })

      res.status(200).json({
         status: "success",
         data: {
            user,
         },
      })
   } catch (err) {
      res.status(404).json({
         status: "fail",
         message: err,
      })
   }
}

exports.deleteUser = async (req, res) => {
   try {
      await Schema.findByIdAndDelete(req.params.id)

      res.status(204).json({
         status: "success",
         data: null,
      })
   } catch (err) {
      res.status(404).json({
         status: "fail",
         message: err,
      })
   }
}
