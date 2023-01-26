import { ObjectId } from "mongoose";
export default class Station {
  constructor(
    public id: string,
    public stationID: string,
    public Nimi: string,
    public Namn: string,
    public Name: string,
    public Osoite: string,
    public Adress: string,
    public Kaupunki: string,
    public Stad: string,
    public Operaattor: string,
    public Kapasiteet: string,
    public x: string,
    public y: string,
    public _id?: ObjectId
  ) {}
}

// import { ObjectId } from "mongodb";
// export default class Game {
//   constructor(public name: string, public price: number, public category: string, public id?: ObjectId) {}
// }
