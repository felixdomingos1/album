import multer from "multer";
import path from "path";
import { v4 as uuidV4 } from "uuid";

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp");

const storage = multer.diskStorage({
  destination: TMP_FOLDER,
  filename: (req, file, cb) => {
    const uuid = uuidV4();
    const fileExtension = file.originalname.split(".").pop();
    const fileName = `${uuid}.${fileExtension}`;
    cb(null, fileName);
  },
});

const multerConfig = {
  directory: TMP_FOLDER,
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedMimes = ["image/jpeg", "image/pjpeg", "image/png", "application/pdf"];
    const isValidMimeType = allowedMimes.includes(file.mimetype);

    if (isValidMimeType) {
      cb(null, true);
    } else {
      cb(new Error("Invalid image extension!"));
    }
  },
};

export { multerConfig };
