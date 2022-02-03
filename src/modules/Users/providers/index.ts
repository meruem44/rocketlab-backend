import { container } from "tsyringe";

import { IHashProvider } from "./HashProvider/models/IHashProvider";
import { BCryptHashedProvider } from "./HashProvider/implementations/BCryptHashedProvider";

import { ITokenProvider } from "./TokenProvider/models/ITokenProvider";
import { JWTTokenProvider } from "./TokenProvider/implementations/JWTTokenProvider";

container.registerSingleton<IHashProvider>(
  "HashProvider",
  BCryptHashedProvider
);

container.registerSingleton<ITokenProvider>("TokenProvider", JWTTokenProvider);
