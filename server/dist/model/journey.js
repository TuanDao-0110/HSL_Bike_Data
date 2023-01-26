"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Journey {
    constructor(id, departureTime, departureStationId, departureStationName, returnStationId, returnStationName, coveredDistance, duration, _id) {
        this.id = id;
        this.departureTime = departureTime;
        this.departureStationId = departureStationId;
        this.departureStationName = departureStationName;
        this.returnStationId = returnStationId;
        this.returnStationName = returnStationName;
        this.coveredDistance = coveredDistance;
        this.duration = duration;
        this._id = _id;
    }
}
exports.default = Journey;
