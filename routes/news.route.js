import { Router } from "express";
import { newsController } from "../controllers/news.controller.js";


const newsRouter = Router();

newsRouter.post('/news', newsController.createNews)
newsRouter.delete('/news/:id', newsController.removeNews)
newsRouter.patch('/news/:id', newsController.updateNews)
newsRouter.get('/news/:id', newsController.getNewsById)
newsRouter.get('/news', newsController.getNews)
newsRouter.get('/news/category/:id', newsController.getNewsByCategoryId)

export {newsRouter}
