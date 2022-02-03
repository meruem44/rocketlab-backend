import { IHashProvider } from "../models/IHashProvider";

class FakeHashProvider implements IHashProvider {
  public async compareHash(hashed: string, payload: string): Promise<boolean> {
    return hashed === payload;
  }

  public async generateHash(payload: string): Promise<string> {
    return payload;
  }
}

export { FakeHashProvider };
