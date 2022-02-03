import { container } from "tsyringe";

import { S3StorageProvider } from "./StorageProvider/implementations/S3StorageProvider";
import { IStorageProvider } from "./StorageProvider/models/IStorageProvider";

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  S3StorageProvider
);
