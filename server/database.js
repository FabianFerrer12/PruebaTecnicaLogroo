import { connect } from "mongoose";
export async function startConnection() {
  await connect("mongodb://127.0.0.1:27017/imagesdb", {
    useNewUrlParser: true,
  });
}
