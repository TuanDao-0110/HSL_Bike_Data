"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRouter = void 0;
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("../config/dbConnect");
exports.gamesRouter = express_1.default.Router();
exports.gamesRouter.use(express_1.default.json());
exports.gamesRouter
    .post("/api/game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const newGame = req.body;
        const result = yield ((_a = dbConnect_1.collections.games) === null || _a === void 0 ? void 0 : _a.insertOne(newGame));
        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}))
    .get("/api/game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        // const newGame = req.body as Game;
        const result = yield ((_b = dbConnect_1.collections.games) === null || _b === void 0 ? void 0 : _b.find({}));
        console.log(result);
        res.status(200).send(result);
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}));
