import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos/todos";

let todos = [
  { id: 1, text: "buy milk", date: new Date() },
  { id: 2, text: "buy funkos", date: null },
  { id: 3, text: "buy jacket", date: new Date() },
];

export class TodosController {
  //*DI
  constructor() {}

  public getTodos = async (req: Request, res: Response) => {
    const getTodos = await prisma.todo.findMany();
    return res.json(getTodos);
  };
  public getTodoById = async (req: Request<{ id: string }>, res: Response) => {
    const id = +req.params.id;
    console.log(id);
    if (isNaN(id)) {
      return res.status(400).json({ error: ` id ${id} is not a number` });
    }

    const TodoById = await prisma.todo.findUnique({ where: { id } });

    TodoById
      ? res.json(TodoById)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = async (req: Request, res: Response) => {
    const [error, createTodoDto] = CreateTodoDto.create(req.body);

    if (error) return res.status(400).json({ error });

    const todo = await prisma.todo.create({ data: createTodoDto! });

    res.json(todo);
  };

  public updateTodoById = async (req: any, res: Response) => {
    const id = +req.params.id;
    const [error,updateTodoDto] = UpdateTodoDto.update({...req.body,id})
    if(error) return res.status(400).json({error})
      console.log('llega aqui')
    try {
      const TodoById = await prisma.todo.update({
        where: {
          id
        },
        data: updateTodoDto!.values,
      });
      console.log(TodoById,'todobyid')
      res.json(TodoById);
    } catch (error: any) {
      if (error.code === "P2025") {
        return res.status(404).json({ error: `Todo with id ${id} not found` });
      }
      console.log(error)
      return res.status(500).json({ error: "Internal server error 2" });
    }
  };

  public deleteTodoById = async (req: any, res: Response) => {
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
      const TodoById = await prisma.todo.delete({
        where: {
          id,
        },
      });
      res.json(TodoById);
    } catch (error: any) {
      if (error.code === "P2025") {
        return res.status(404).json({ error: `Todo with id ${id} not found` });
      }
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
