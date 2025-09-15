"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosController = void 0;
const postgres_1 = require("../../data/postgres");
const todos_1 = require("../../domain/dtos/todos");
let todos = [
    { id: 1, text: "buy milk", date: new Date() },
    { id: 2, text: "buy funkos", date: null },
    { id: 3, text: "buy jacket", date: new Date() },
];
class TodosController {
    //*DI
    constructor() { }
    getTodos = async (req, res) => {
        const getTodos = await postgres_1.prisma.todo.findMany();
        return res.json(getTodos);
    };
    getTodoById = async (req, res) => {
        const id = +req.params.id;
        console.log(id);
        if (isNaN(id)) {
            return res.status(400).json({ error: ` id ${id} is not a number` });
        }
        const TodoById = await postgres_1.prisma.todo.findUnique({ where: { id } });
        TodoById
            ? res.json(TodoById)
            : res.status(404).json({ error: `TODO with id ${id} not found` });
    };
    createTodo = async (req, res) => {
        const [error, createTodoDto] = todos_1.CreateTodoDto.create(req.body);
        if (error)
            return res.status(400).json({ error });
        const todo = await postgres_1.prisma.todo.create({ data: createTodoDto });
        res.json(todo);
    };
    updateTodoById = async (req, res) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = todos_1.UpdateTodoDto.update({ ...req.body, id });
        if (error)
            return res.status(400).json({ error });
        console.log('llega aqui');
        try {
            const TodoById = await postgres_1.prisma.todo.update({
                where: {
                    id
                },
                data: updateTodoDto.values,
            });
            console.log(TodoById, 'todobyid');
            res.json(TodoById);
        }
        catch (error) {
            if (error.code === "P2025") {
                return res.status(404).json({ error: `Todo with id ${id} not found` });
            }
            console.log(error);
            return res.status(500).json({ error: "Internal server error 2" });
        }
    };
    deleteTodoById = async (req, res) => {
        const id = +req.params.id;
        console.log(id);
        if (isNaN(id)) {
            return res.status(400).json({ error: ` id ${id} is not a number` });
        }
        if (id === undefined) {
            return res.status(400).json({ error: ` id ${id} not found` });
        }
        console.log("llega aqui");
        console.log("llega aqui");
        try {
            const TodoById = await postgres_1.prisma.todo.delete({
                where: {
                    id,
                },
            });
            res.json(TodoById);
        }
        catch (error) {
            if (error.code === "P2025") {
                return res.status(404).json({ error: `Todo with id ${id} not found` });
            }
            return res.status(500).json({ error: "Internal server error" });
        }
    };
}
exports.TodosController = TodosController;
//# sourceMappingURL=controller.js.map