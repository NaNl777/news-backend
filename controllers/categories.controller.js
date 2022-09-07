import { Categorie } from "../models/Categorie.model.js";

const categoriesController = {
  createCategorie: async (req, res) => {
    try {
      const addCategories = await Categorie.create({
        name: req.body.name,
      });
      res.json(addCategories);
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteCategorie: async (req, res) => {
    try {
      const deleteCategorie = await Categorie.findByIdAndDelete(req.params.id);
      res.json(deleteCategorie);
    } catch (error) {
      console.log(error.message);
    }
  },

  getCategorie: async (req, res) => {
    try {
      const getCategorie = await Categorie.find();
      res.json(getCategorie);
    } catch (error) {
      res.json(error.message);
    }
  },
};

export { categoriesController };
