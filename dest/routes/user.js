"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', (req, res) => {
    console.log(res.locals.user);
    console.log(res.locals.logMessage);
    res.send("All Users");
});
router.post('/', (req, res) => {
    res.send("User created");
});
router.put('/', (req, res) => {
    const id = req.query.id;
    res.send("User updated");
});
router.delete('/:id', (req, res) => {
    res.send("User  deleted");
});
router.get('/:id', (req, res) => {
    res.send("get specific User");
});
exports.default = router;
