import { Router } from "express";
import {  TodosController } from "./todos/controller";
import { TodoRoutes } from "./todos/todoRoutes";

export class AppRoutes {
  static get Routes(): Router {
    const router = Router();

    router.use("/api/todos",TodoRoutes.Routes )
    return router;
  }
}
