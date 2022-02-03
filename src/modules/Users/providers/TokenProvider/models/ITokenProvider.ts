import { ITokenProviderDTO } from "../dtos/ITokenProviderDTO";

export interface ITokenProvider {
  generateToken(data: ITokenProviderDTO): string;
}
