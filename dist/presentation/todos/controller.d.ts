import { Request, Response } from "express";
export declare class TodosController {
    constructor();
    getTodos: (req: Request, res: Response) => Response<any, Record<string, any>>;
    getTodoById: (req: any, res: Response) => void;
    createTodo: (req: Request, res: Response) => Response<any, Record<string, any>> | undefined;
    updateTodoById: (req: any, res: Response) => Response<any, Record<string, any>> | undefined;
    deleteTodoById: (req: any, res: Response) => Response<any, Record<string, any>> | undefined;
}
//# sourceMappingURL=controller.d.ts.map