"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const todoRoutes_1 = require("./todos/todoRoutes");
class AppRoutes {
    static get Routes() {
        const router = (0, express_1.Router)();
        router.use("/api/todos", todoRoutes_1.TodoRoutes.Routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map