import mongoose from "mongoose";

const categorieSchema = mongoose.Schema({
    name: String
})

const Categorie = mongoose.model('Categorie', categorieSchema);

export { Categorie }