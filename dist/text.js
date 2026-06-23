"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_http_1 = require("node:http");
const app = (0, express_1.default)();
const PORT = 5000;
app.get("/", (req, res) => {
    return res.send("Ecommerce System");
});
const server = (0, node_http_1.createServer)(app);
server.listen(PORT, () => console.log(`Service is running on port ${PORT}`));
//# sourceMappingURL=text.js.map