"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TodoRoutes {
    static get Routes() {
        const router = (0, express_1.Router)();
        const TodoController = new controller_1.TodosController();
        router.get("/", TodoController.getTodos);
        router.get("/:id", TodoController.getTodoById);
        router.post("/", TodoController.createTodo);
        router.put("/:id", TodoController.updateTodoById);
        router.delete("/:id", TodoController.deleteTodoById);
        return router;
    }
}
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=todoRoutes.js.map