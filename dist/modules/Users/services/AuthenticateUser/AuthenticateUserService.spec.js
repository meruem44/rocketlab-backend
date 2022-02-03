"use strict";

require("reflect-metadata");

var _FakeHashProvider = require("../../providers/HashProvider/fakes/FakeHashProvider");

var _FakeUserRepository = require("../../repositories/fakes/FakeUserRepository");

var _FakeTokenProvider = require("../../providers/TokenProvider/fakes/FakeTokenProvider");

var _AuthenticateUserService = require("./AuthenticateUserService");

var _AppError = require("../../../../shared/errors/AppError");

let fakeTokenProvider;
let fakeUserRepository;
let fakeHashProvider;
let authenticateUser;
describe("Authenticate User", () => {
  beforeEach(() => {
    fakeHashProvider = new _FakeHashProvider.FakeHashProvider();
    fakeUserRepository = new _FakeUserRepository.FakeUserRepository();
    fakeTokenProvider = new _FakeTokenProvider.FakeTokenProvider();
    authenticateUser = new _AuthenticateUserService.AuthenticateUserUseCase(fakeUserRepository, fakeHashProvider, fakeTokenProvider);
  });
  it("should be able to authenticate user", async () => {
    const generateToken = jest.spyOn(fakeTokenProvider, "generateToken");
    const compareHash = jest.spyOn(fakeHashProvider, "compareHash");
    const user = await fakeUserRepository.create({
      email: "Joe due",
      name: "Joe Due",
      password: "123456"
    });
    const response = await authenticateUser.execute({
      email: "Joe due",
      password: "123456"
    });
    expect(response).toHaveProperty("token");
    expect(response).toHaveProperty("user");
    expect(generateToken).toBeCalledWith({
      user_id: user.id
    });
    expect(compareHash).toBeCalledWith("123456", user.password);
  });
  it("should not be able to authenticate user with e-mail not exist", async () => {
    await expect(authenticateUser.execute({
      email: "Joe due",
      password: "123456"
    })).rejects.toBeInstanceOf(_AppError.AppError);
  });
  it("should not be able to authenticate user with password does not matched", async () => {
    const compareHash = jest.spyOn(fakeHashProvider, "compareHash");
    const user = await fakeUserRepository.create({
      email: "Joe@due.com",
      name: "Joe Due",
      password: "123456"
    });
    await expect(authenticateUser.execute({
      email: "Joe@due.com",
      password: "not password"
    })).rejects.toBeInstanceOf(_AppError.AppError);
    expect(compareHash).toBeCalledWith("not password", user.password);
  });
});