import { Request, Response } from "express";

let todos = [
  { id: 1, text: "buy milk", date: new Date() },
  { id: 2, text: "buy funkos", date: null },
  { id: 3, text: "buy jacket", date: new Date() },
];

export class TodosController {
  //*DI
  constructor() {}

  public getTodos = (req: Request, res: Response) => {
    return res.json(todos);
  };
  public getTodoById = (req: any, res: Response) => {
    const id = +req.params.id;
    console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ error: ` id ${id} is not a number` });
    }

    const TodoById = todos.find((todo) => todo.id === id);

    TodoById
      ? res.json(TodoById)
      : res.status(404).json({ error: `TODO with id ${id} not found` });
  };

  public createTodo = (req: Request, res: Response) => {
    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: "text property is required" });
    const newTodo = {
      id: todos.length + 1,
      text: text,
      date: null,
    };
    todos.push(newTodo);
    res.json(newTodo);
  };

  public updateTodoById = (req: any, res: Response) => {
    const id = +req.params.id;
    console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ error: ` id ${id} is not a number` });
    }

    const TodoById = todos.find((todo) => todo.id === id);
    if (!TodoById) {
      res.status(400).json({ error: ` todo with id ${id}  not found` });
    }

    const { text } = req.body;
    if (!text)
      return res.status(400).json({ error: "text property is required" });

    TodoById!.text = text;

    res.json(TodoById);
  };

  public deleteTodoById = (req: any, res: Response) => {
    const id = +req.params.id;
    console.log(id);
    if (isNaN(id)) {
      res.status(400).json({ error: ` id ${id} is not a number` });
    }
    if (id === undefined) {
      res.status(400).json({ error: ` id ${id} not found` });
    }
    console.log("llega aqui");
    const TodoById = todos.find((todo) => todo.id === id);
    if (!TodoById)
      return res.status(400).json({ error: ` id ${id} not found` });

    todos = todos.filter((todo) => todo.id !== TodoById!.id);

    res.json({ message: ` todo with id ${id} eliminates`, TodoById });
  };
}
