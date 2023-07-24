"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MOCK_DATA_2_js_1 = __importDefault(require("../data/MOCK_DATA-2.js"));
const uuid_1 = require("uuid");
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log("hi there from task route");
    next();
});
router.get('/', (req, res) => {
    const page = parseInt(req.query.page || '1');
    const pageSize = parseInt(req.query.pageSize || '10');
    const filteredItems = MOCK_DATA_2_js_1.default.slice((page - 1) * pageSize, page * pageSize);
    res.send({
        page,
        pageSize,
        total: MOCK_DATA_2_js_1.default.length,
        items: filteredItems
    });
});
router.post('/', (req, res) => {
    if (!req.body.title || !req.body.userId) {
        res.status(400);
        return;
    }
    const newTask = {
        id: (0, uuid_1.v4)(),
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
        status: "new",
        index: MOCK_DATA_2_js_1.default.length
    };
    MOCK_DATA_2_js_1.default.unshift(newTask);
    res.status(201).send(newTask);
});
router.put('/:id', (req, res) => {
    res.send("Task updated");
});
router.delete('/:id', (req, res) => {
    res.send("Task  deleted");
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const task = MOCK_DATA_2_js_1.default.find(item => item.id === id);
    if (task) {
        res.send(task);
    }
    else {
        res.status(404).send("not found");
    }
});
exports.default = router;
