"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
class Server {
    app = (0, express_1.default)();
    port;
    publicPath;
    routes;
    constructor(options) {
        const { port, public_path = 'public', routes } = options;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes;
    }
    async star() {
        // console.log('server running')
        //* Middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        //* Public Folder
        this.app.use(express_1.default.static(this.publicPath));
        //* Routes 
        this.app.use(this.routes);
        //*SPA
        this.app.get(/.*/, (req, res) => {
            const indexPath = path_1.default.join(__dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        });
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map