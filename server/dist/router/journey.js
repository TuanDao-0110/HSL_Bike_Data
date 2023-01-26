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
exports.journeyRouter = void 0;
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("../config/dbConnect");
const filePath = "../../importdata/journey/time_table_0.json";
const router = express_1.default.Router();
exports.journeyRouter = router;
router.get("/api/journey", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { page } = req.query;
        const result = yield ((_a = dbConnect_1.collections === null || dbConnect_1.collections === void 0 ? void 0 : dbConnect_1.collections.journey) === null || _a === void 0 ? void 0 : _a.find({}).limit(400).skip(Number(page) * 400).toArray());
        res.status(200).json({ result, msg: "ok" });
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
}));
