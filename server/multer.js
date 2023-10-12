import multer from "multer";
import { v4 as uuidv4 } from "uuid";
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + ".png");
  },
});

export default multer({ storage });
