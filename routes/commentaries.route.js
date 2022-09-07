import { Router } from "express";
import { commentsController } from "../controllers/commentaries.controller.js";

const routeC = Router();

routeC.get("/comments/newsId/:id", commentsController.getCommentByNews);
routeC.post("/comments", commentsController.addCommentToNews);
routeC.delete("/comments/:id", commentsController.deleteComment);

export { routeC };
// - добавление комментария к определенной новости
// - удалени комментария
// - вывод всех комментариев определенной новости
