import multer, { StorageEngine } from "multer";
import { resolve } from "path";
import { randomBytes } from "crypto";

const tmpFolder = resolve(__dirname, "..", "..", "temp");

interface IUploadConfig {
  driver: "s3" | "disk";
  directory: string;
  multer: {
    storage: StorageEngine;
  };
  config: {
    disk: {};
    aws: {
      bucket: string;
    };
  };
}

export const uploadConfig = {
  driver: "s3",
  directory: tmpFolder,

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(req, file, callback) {
        const fileHash = randomBytes(10).toString("hex");
        const fileName = `${fileHash}-${file.originalname}`;

        return callback(null, fileName);
      },
    }),
  },
  config: {
    disk: {},
    aws: {
      bucket: process.env.AWS_BUCKET_NAME,
    },
  },
} as IUploadConfig;
