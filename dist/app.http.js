"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http2_1 = __importDefault(require("http2"));
const fs_1 = __importDefault(require("fs"));
const server = http2_1.default.createSecureServer({
    key: fs_1.default.readFileSync("./keys/server.key"),
    cert: fs_1.default.readFileSync("./keys/server.crt"),
}, (req, res) => {
    console.log(req.url, "urll");
    //   const data = { name: "cris", age: 21, city: "new york" };
    //   res.writeHead(200, { "Content-Type": "application/json" });
    //   res.end(JSON.stringify(data));
    if (req.url === "/") {
        const htmlFile = fs_1.default.readFileSync("./public/index.html", "utf-8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(htmlFile);
        return;
    }
    if (req.url?.endsWith(".js")) {
        res.writeHead(200, { "Content-Type": "application/javascript" });
    }
    else if (req.url?.endsWith(".css")) {
        res.writeHead(200, { "Content-Type": "text/css" });
    }
    try {
        const responseContent = fs_1.default.readFileSync(`./public${req.url}`, "utf-8");
        res.end(responseContent);
    }
    catch (error) {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end();
    }
});
server.listen(8080, () => {
    console.log("server running on port 8080");
});
//# sourceMappingURL=app.http.js.map