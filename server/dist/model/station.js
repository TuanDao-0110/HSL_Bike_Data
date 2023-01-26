"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Station {
    constructor(id, stationID, Nimi, Namn, Name, Osoite, Adress, Kaupunki, Stad, Operaattor, Kapasiteet, x, y, _id) {
        this.id = id;
        this.stationID = stationID;
        this.Nimi = Nimi;
        this.Namn = Namn;
        this.Name = Name;
        this.Osoite = Osoite;
        this.Adress = Adress;
        this.Kaupunki = Kaupunki;
        this.Stad = Stad;
        this.Operaattor = Operaattor;
        this.Kapasiteet = Kapasiteet;
        this.x = x;
        this.y = y;
        this._id = _id;
    }
}
exports.default = Station;
// import { ObjectId } from "mongodb";
// export default class Game {
//   constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
// }
