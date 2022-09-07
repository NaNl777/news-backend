import mongoose from "mongoose";

const commentarySchema = mongoose.Schema({
  name: String,
  text: String,
  newsCommentary: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Commentary = mongoose.model("Commentary", commentarySchema);

export { Commentary };
