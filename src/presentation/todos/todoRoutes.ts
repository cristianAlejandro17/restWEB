import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {
  static get Routes(): Router {
    const router = Router();
    const TodoController = new TodosController()

    router.get("/",TodoController.getTodos )
    router.get("/:id",TodoController.getTodoById )
    router.post("/create",TodoController.createTodo )
    router.put("/:id",TodoController.updateTodoById )
    router.delete("/:id",TodoController.deleteTodoById )


    return router;
  }
}