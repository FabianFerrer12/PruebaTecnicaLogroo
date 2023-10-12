import { Schema, model, Document } from "mongoose";

const schema = new Schema({
  date: Date,
  user: String,
  urlimages: String,
});

export default model("Images", schema);
