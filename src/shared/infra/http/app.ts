import express, { Application, json } from "express";
import "express-async-errors";
import cors from "cors";

import { routes } from "@shared/infra/http/routes";
import "@shared/infra/typeorm";
import "@shared/container";

class App {
  public server: Application;

  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.server.use(cors());
    this.server.use(json());
  }

  private routes(): void {
    this.server.use(routes);
  }
}

const server = new App().server;

export { server };
