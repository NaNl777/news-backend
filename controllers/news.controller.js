import { News } from "../models/New.model.js";

const newsController = {
   createNews: async (req, res) => {
    try { 
    const addNews = await News.create({
        title: req.body.title,
        text: req.body.text,
        categorieId: req.body.categorieId
     })
      res.json(addNews)
   } catch (e) {
      console.log(e.message)
   }
},

  
   removeNews: async(req, res) => {
      try {
        const deleteNews = await News.findByIdAndRemove(req.params.id)
        res.json(deleteNews)
      } catch (error) {
        console.log(error.message)
      }
   },


   updateNews: async(req, res) => {
      try {
        const updateNews = await News.findByIdAndUpdate(req.params.id, {"title": req.body.title, "text": req.body.text, "categorieId": req.body.categorieId})
        res.json(updateNews);
      } catch (error) {
        console.log(error.message)
      }
   },

   getNewsById: async(req, res) => {
   try {
    const getNewsById = await News.findById(req.params.id)
      res.json(updateNewsById)
  } catch(e) {
      console.log(e)
  }
},
   
   getNews: async(req, res) => {
    try {
        const getNews = await News.find()
        return res.json(getNews)
    } catch (error) {
        
    }
   },

   getNewsByCategoryId: async(req, res) => {
      try {
          const getNewsByCategoryId = await News.find({categorieId: req.params.id})
          res.json(getNewsByCategoryId)
      } catch (error) {
         console.log(error)
      }
   }
   

}

export {newsController}