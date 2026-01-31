import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "public/uploads/team",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploadTeamImage = multer({ storage });
