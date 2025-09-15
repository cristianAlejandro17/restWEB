import { Request, Response } from "express";
export declare class TodosController {
    constructor();
    getTodos: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getTodoById: (req: Request<{
        id: string;
    }>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    createTodo: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateTodoById: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteTodoById: (req: any, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=controller.d.ts.map