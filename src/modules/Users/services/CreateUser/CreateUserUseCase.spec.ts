import "reflect-metadata";

import { AppError } from "@shared/errors/AppError";

import { CreateUseService } from "./CreateUseService";
import { FakeHashProvider } from "@modules/Users/providers/HashProvider/fakes/FakeHashProvider";
import { FakeUserRepository } from "@modules/Users/repositories/fakes/FakeUserRepository";

let createUser: CreateUseService;
let fakeUserRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;

describe("CreateUser", () => {
  beforeEach(() => {
    fakeHashProvider = new FakeHashProvider();
    fakeUserRepository = new FakeUserRepository();
    createUser = new CreateUseService(fakeUserRepository, fakeHashProvider);
  });

  it("should be able to create user", async () => {
    const generateHash = jest.spyOn(fakeHashProvider, "generateHash");

    const user = await createUser.execute({
      email: "joe@due.com",
      name: "Joe Due",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
    expect(generateHash).toBeCalledWith("123456");
  });

  it("should not be able to create user with email already exist", async () => {
    await createUser.execute({
      email: "joe@due.com",
      name: "Joe Due",
      password: "123456",
    });

    await expect(
      createUser.execute({
        email: "joe@due.com",
        name: "Joe Due",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
