import mongoose from "mongoose"

const newSchema = mongoose.Schema({
  title: String,
  text: String, 
 categorieId: {
//    ref: "Categorie"
   type: mongoose.Schema.Types.ObjectId
 }
})

const News = mongoose.model('News', newSchema)

export {News}