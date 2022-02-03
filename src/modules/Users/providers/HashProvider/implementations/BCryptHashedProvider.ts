import { hash, compare } from "bcrypt";

import { IHashProvider } from "../models/IHashProvider";

class BCryptHashedProvider implements IHashProvider {
  public async compareHash(hashed: string, payload: string): Promise<boolean> {
    return compare(hashed, payload);
  }

  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 12);
  }
}

export { BCryptHashedProvider };
