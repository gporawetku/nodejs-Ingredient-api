"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => res.status(200).send({
    message: `Welcome to the cookbook API! \n Endpoints available at http://localhost:${port}/api/v1`,
}));
app.listen(port, () => console.log(`🚀 Server ready at: http://localhost:${port}`));
exports.default = app;
