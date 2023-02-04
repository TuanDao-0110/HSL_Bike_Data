import { checkValidateData } from "../component/map/Service_map";
import { Journey_Type, Lang_Type, StationType, Top5Type } from "../ultilities/types";

describe("reject a journey where departure time is not a parseable DateTime", () => {
  it("should reject a journey with unparseable departure and arrival times", () => {
    const journeyData = [
      {
        departureTime: "2023-02-01T10:00:00",
        returnTime: "2023-02-01T12:00:00",
        departureStationId: "1",
        returnStationId: "2",
        duration: 120,
      },
      {
        departureTime: "not-a-date",
        returnTime: "2023-02-01T12:00:00",
        departureStationId: "1",
        returnStationId: "2",
        duration: 120,
      },
      {
        departureTime: "2023-02-01T10:00:00",
        returnTime: "not-a-date",
        departureStationId: "1",
        returnStationId: "2",
        duration: 120,
      },
    ];
    const filteredData = checkValidateData(journeyData, "1", "departureStationId");
    expect(filteredData).toEqual([
      {
        departureTime: "2023-02-01T10:00:00",
        returnTime: "2023-02-01T12:00:00",
        departureStationId: "1",
        returnStationId: "2",
        duration: 120,
      },
    ]);
  });
});

describe("reject a journey where arrival happens before departure", () => {
  it("should reject a journey where arrival happens before departure", () => {
    const journeyData = [
      {
        departureTime: "2022-12-15T10:00:00",
        returnTime: "2022-12-14T12:00:00",
        departureStationId: 1,
        returnStationId: 2,
        duration: 120,
      },
    ];
    const stationId = "1";
    const directionId = "departureStationId";
    const result = checkValidateData(journeyData, stationId, directionId);

    expect(result).toEqual([]);
  });
});

describe("reject if a departure station id is not a positive integer (and the same with arrival and length of the trip)", () => {
  it("should reject a journey with invalid departure station ID", () => {
    const journeyData = [
      {
        departureTime: "2022-01-01T10:00:00",
        returnTime: "2022-01-01T12:00:00",
        departureStationId: "not a positive integer",
        returnStationId: 1,
        duration: 120,
      },
    ];
    const stationId = "some station id";

    const result = checkValidateData(journeyData, stationId, "departureStationId");

    expect(result).toEqual([]);
  });

  it("should reject a journey with invalid return station ID", () => {
    const journeyData = [
      {
        departureTime: "2022-01-01T10:00:00",
        returnTime: "2022-01-01T12:00:00",
        departureStationId: 1,
        returnStationId: "not a positive integer",
        duration: 120,
      },
    ];
    const stationId = "some station id";

    const result = checkValidateData(journeyData, stationId, "departureStationId");

    expect(result).toEqual([]);
  });

  it("should reject a journey with invalid trip duration", () => {
    const journeyData = [
      {
        departureTime: "2022-01-01T10:00:00",
        returnTime: "2022-01-01T12:00:00",
        departureStationId: 1,
        returnStationId: 2,
        duration: "not a positive integer",
      },
    ];
    const stationId = "some station id";

    const result = checkValidateData(journeyData, stationId, "departureStationId");

    expect(result).toEqual([]);
  });

  it("should accept a valid journey", () => {
    const journeyData = [
      { departureTime: "2022-01-01T10:00:00", 
      returnTime: "2022-01-01T12:00:00", 
      departureStationId: 1, 
      returnStationId: 2, 
      duration: 120 },
    ];
    const stationId = "some station id";

    const result = checkValidateData(journeyData, stationId, "departureStationId");

    expect(result).toEqual([]);
  });
});
