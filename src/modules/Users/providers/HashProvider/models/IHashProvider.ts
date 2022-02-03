interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(hashed: string, payload: string): Promise<boolean>;
}

export { IHashProvider };
