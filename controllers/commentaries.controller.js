import { Commentary } from "../models/Commentary.model.js";

const commentsController = {
  getCommentByNews: (req, res) => {
    Commentary.find({ newsId: req.params.id }, (err, news) => {
      if (!err) {
        res.json(news);
      } else {
        throw err;
      }
    });
  },
  addCommentToNews: (req, res) => {
    Commentary.create({
      author: req.body.author,
      text: req.body.text,
      newsId: req.body.newsId,
    }).then(() => {
      res.json("Комментарий добавлен к новости " + req.body.newsId);
    });
  },
  deleteComment: (req, res) => {
    Commentary.findByIdAndRemove(req.params.id).then(() => {
      res.json("Комментарий с таким id: " + req.params.id + " успешно удален.");
    });
  },
};

export {commentsController}