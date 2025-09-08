import { Router } from "express";
interface Options {
    port: number;
    routes: Router;
    public_path?: string;
}
export declare class Server {
    private app;
    private readonly port;
    private readonly publicPath;
    private readonly routes;
    constructor(options: Options);
    star(): Promise<void>;
}
export {};
//# sourceMappingURL=server.d.ts.map