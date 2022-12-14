"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const readCSV_1 = require("./readCSV");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
app.get('/books', readCSV_1.getBooks);
app.get('/magazines', readCSV_1.getMagazines);
app.get('/book', readCSV_1.getBookByIsbn);
app.get('/email', readCSV_1.getBookByEmail);
// app.get('/sort', sortBook)
app.listen(PORT, () => {
    console.log(`Express App listening on port ${PORT}`);
});
