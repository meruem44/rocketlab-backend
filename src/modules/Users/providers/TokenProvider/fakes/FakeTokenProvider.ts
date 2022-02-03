import { ITokenProviderDTO } from "../dtos/ITokenProviderDTO";
import { ITokenProvider } from "../models/ITokenProvider";

class FakeTokenProvider implements ITokenProvider {
  public generateToken(data: ITokenProviderDTO): string {
    return `dasgdghasfd-dasgd${data.user_id}`;
  }
}

export { FakeTokenProvider };
