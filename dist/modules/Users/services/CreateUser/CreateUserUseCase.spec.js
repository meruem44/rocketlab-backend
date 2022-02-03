"use strict";

require("reflect-metadata");

var _AppError = require("../../../../shared/errors/AppError");

var _CreateUseService = require("./CreateUseService");

var _FakeHashProvider = require("../../providers/HashProvider/fakes/FakeHashProvider");

var _FakeUserRepository = require("../../repositories/fakes/FakeUserRepository");

let createUser;
let fakeUserRepository;
let fakeHashProvider;
describe("CreateUser", () => {
  beforeEach(() => {
    fakeHashProvider = new _FakeHashProvider.FakeHashProvider();
    fakeUserRepository = new _FakeUserRepository.FakeUserRepository();
    createUser = new _CreateUseService.CreateUseService(fakeUserRepository, fakeHashProvider);
  });
  it("should be able to create user", async () => {
    const generateHash = jest.spyOn(fakeHashProvider, "generateHash");
    const user = await createUser.execute({
      email: "joe@due.com",
      name: "Joe Due",
      password: "123456"
    });
    expect(user).toHaveProperty("id");
    expect(generateHash).toBeCalledWith("123456");
  });
  it("should not be able to create user with email already exist", async () => {
    await createUser.execute({
      email: "joe@due.com",
      name: "Joe Due",
      password: "123456"
    });
    await expect(createUser.execute({
      email: "joe@due.com",
      name: "Joe Due",
      password: "123456"
    })).rejects.toBeInstanceOf(_AppError.AppError);
  });
});