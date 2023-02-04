import { averageEndAtStation, averageStartFromStation } from "../component/map/Service_map";
import { Journey_Type } from "../ultilities/types";
describe("averageStartFromStation", () => {
  it("should return No Data if there are no journeys starting from the specified station", () => {
    const stationId = "3";
    const journeyData: Journey_Type[] = [
      {
        id: 1,
        departureTime: "12:00",
        departureStationId: "1",
        departureStationName: "Station 1",
        returnStationId: "2",
        returnStationName: "Station 2",
        coveredDistance: "10",
        duration: "2:00",
      },
      {
        id: 2,
        departureTime: "13:00",
        departureStationId: "2",
        departureStationName: "Station 2",
        returnStationId: "3",
        returnStationName: "Station 3",
        coveredDistance: "20",
        duration: "3:00",
      },
    ];

    const result = averageStartFromStation(stationId, journeyData);
    expect(result).toEqual("No Data");
  });

  it("should return the correct average even if journeys have different covered distances", () => {
    const stationId = "1";
    const journeyData: Journey_Type[] = [
      {
        id: 1,
        departureTime: "12:00",
        departureStationId: "1",
        departureStationName: "Station 1",
        returnStationId: "2",
        returnStationName: "Station 2",
        coveredDistance: "10",
        duration: "2:00",
      },
      {
        id: 2,
        departureTime: "13:00",
        departureStationId: "1",
        departureStationName: "Station 1",
        returnStationId: "3",
        returnStationName: "Station 3",
        coveredDistance: "30",
        duration: "3:00",
      },
    ];

    const result = averageStartFromStation(stationId, journeyData);
    expect(result).toEqual("20.00");
  });
});

describe("averageEndAtStation", () => {
  const journeyData = [
    {
      id: 1,
      departureTime: "10:00",
      departureStationId: "1",
      departureStationName: "Station A",
      returnStationId: "2",
      returnStationName: "Station B",
      coveredDistance: "10",
      duration: "1 hour",
    },
    {
      id: 2,
      departureTime: "11:00",
      departureStationId: "1",
      departureStationName: "Station A",
      returnStationId: "3",
      returnStationName: "Station C",
      coveredDistance: "5",
      duration: "30 minutes",
    },
    {
      id: 3,
      departureTime: "12:00",
      departureStationId: "2",
      departureStationName: "Station B",
      returnStationId: "3",
      returnStationName: "Station C",
      coveredDistance: "15",
      duration: "1 hour 30 minutes",
    },
  ];

  it("returns the average distance covered by journeys ending at a given station", () => {
    expect(averageEndAtStation("2", journeyData)).toBe("10.00");
    expect(averageEndAtStation("3", journeyData)).toBe("10.00");
  });

  it('returns "No Data" if no journeys end at the given station', () => {
    expect(averageEndAtStation("4", journeyData)).toBe("No Data");
  });
});
