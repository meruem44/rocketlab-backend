import "reflect-metadata";

import { FakeHashProvider } from "@modules/Users/providers/HashProvider/fakes/FakeHashProvider";
import { FakeUserRepository } from "@modules/Users/repositories/fakes/FakeUserRepository";
import { FakeTokenProvider } from "@modules/Users/providers/TokenProvider/fakes/FakeTokenProvider";
import { AuthenticateUserUseCase } from "./AuthenticateUserService";
import { AppError } from "@shared/errors/AppError";

let fakeTokenProvider: FakeTokenProvider;
let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let authenticateUser: AuthenticateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUserRepository = new FakeUserRepository();
    fakeTokenProvider = new FakeTokenProvider();
    authenticateUser = new AuthenticateUserUseCase(
      fakeUserRepository,
      fakeHashProvider,
      fakeTokenProvider
    );
  });

  it("should be able to authenticate user", async () => {
    const generateToken = jest.spyOn(fakeTokenProvider, "generateToken");
    const compareHash = jest.spyOn(fakeHashProvider, "compareHash");

    const user = await fakeUserRepository.create({
      email: "Joe due",
      name: "Joe Due",
      password: "123456",
    });

    const response = await authenticateUser.execute({
      email: "Joe due",
      password: "123456",
    });

    expect(response).toHaveProperty("token");
    expect(response).toHaveProperty("user");
    expect(generateToken).toBeCalledWith({ user_id: user.id });
    expect(compareHash).toBeCalledWith("123456", user.password);
  });

  it("should not be able to authenticate user with e-mail not exist", async () => {
    await expect(
      authenticateUser.execute({
        email: "Joe due",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate user with password does not matched", async () => {
    const compareHash = jest.spyOn(fakeHashProvider, "compareHash");

    const user = await fakeUserRepository.create({
      email: "Joe@due.com",
      name: "Joe Due",
      password: "123456",
    });

    await expect(
      authenticateUser.execute({
        email: "Joe@due.com",
        password: "not password",
      })
    ).rejects.toBeInstanceOf(AppError);

    expect(compareHash).toBeCalledWith("not password", user.password);
  });
});
