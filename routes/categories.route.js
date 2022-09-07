import { Router } from "express";
import { categoriesController } from "../controllers/categories.controller.js";

const routerContr = Router();

routerContr.get("/categories", categoriesController.getCategorie);
routerContr.post("/categories", categoriesController.createCategorie);
routerContr.delete("/categories/:id", categoriesController.deleteCategorie);

export { routerContr };

// - добавление категории - 1
// - удаление категории - 1
// - вывод всех категорий - 1
