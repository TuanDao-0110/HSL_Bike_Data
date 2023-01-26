import { ObjectId } from "mongoose";
export default class Journey {
  constructor(
    public id: number,
    public departureTime: string,
    public departureStationId: string,
    public departureStationName: string,
    public returnStationId: string,
    public returnStationName: string,
    public coveredDistance: string,
    public duration: string,
    public _id?: ObjectId | undefined
  ) {}
}
