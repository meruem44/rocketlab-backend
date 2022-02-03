import aws, { S3 } from "aws-sdk";
import { resolve } from "path";
import mime from "mime";
import fs from "fs";

import { uploadConfig } from "@config/upload";

import { IStorageProvider } from "../models/IStorageProvider";
import { AppError } from "@shared/errors/AppError";

class S3StorageProvider implements IStorageProvider {
  public client: S3;

  constructor() {
    this.client = new aws.S3({
      region: "us-east-1",
      accessKeyId: "AKIAZM2BOXMH7LGHGZDB",
      secretAccessKey: "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",
    });
  }

  public async saveFile(file: string): Promise<string> {
    console.log(file);

    // Pegando o diretório do arquivo
    const originalPath = resolve(uploadConfig.directory, file);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new AppError("File not found");
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: uploadConfig.config.aws.bucket,
        Key: file,
        ACL: "public-read",
        ContentType,
        ContentDisposition: `inline; filename=${file}`,
        Body: fileContent,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client.deleteObject({
      Bucket: uploadConfig.config.aws.bucket,
      Key: file,
    });
  }
}

export { S3StorageProvider };
