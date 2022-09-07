import express from "express";
import mongoose from "mongoose";
import {newsRouter} from "./routes/news.route.js";
import { routerContr } from "./routes/categories.route.js";
import { routeC } from "./routes/commentaries.route.js";

const app = express();
app.use(express.json());
app.use(newsRouter);
app.use(routeC)
app.use(routerContr)

const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/NewsTwo";

const port = 3000;

const start = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected");
    await app.listen(port, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
