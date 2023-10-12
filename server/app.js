import express from "express";
import cors from "cors";
import imagesRoutes from "./routes/images.routes.js";
import { PORT } from "./config.js";
import morgan from "morgan";
import path from "path";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("port", PORT);
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.use(morgan("dev"));
app.use(imagesRoutes);
app.use("/uploads", express.static(path.resolve("uploads")));
export default app;
