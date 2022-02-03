import { User } from "@modules/Users/infra/typeorm/entities/User";

export interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

export interface IAuthenticateUserResponse {
  token: string;
  user: User;
}
