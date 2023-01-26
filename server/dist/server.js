"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const dbConnect_1 = require("./config/dbConnect");
require("dotenv").config();
const station_1 = require("./router/station");
const journey_1 = require("./router/journey");
const cors_1 = __importDefault(require("cors"));
const port = 8000;
const app = (0, express_1.default)();
(0, dbConnect_1.connectToDatabase)()
    .then(() => {
    app.use((0, cors_1.default)());
    app.use((0, body_parser_1.json)());
    app.use(station_1.stationRouter);
    app.use(journey_1.journeyRouter);
    app.listen(port, () => {
        console.log(`listening on port ${port}....`);
    });
    app.all("*", (req, res) => {
        res.status(404);
        if (req.accepts("html")) {
            // return res.sendFile(path.join(__dirname, "views", "404.html"));
            return res.json({ msg: "fail" });
        }
        else if (req.accepts("json")) {
            res.json({ msg: "404 not found" });
        }
        else {
            res.type("txt").send("404 not found");
        }
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
