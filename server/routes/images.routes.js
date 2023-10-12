import { Router } from "express";
import {
  getImages,
  postImages,
  getImagesByDates,
} from "../controllers/images.controllers.js";
import multer from "../multer.js";
const router = Router();

router.get("/images", getImages);
router.post("/imagesByDates", getImagesByDates);
router.post("/images", multer.single("image"), postImages);

export default router;
