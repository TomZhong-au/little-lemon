// timeUtils.test.js

import { updateTimes, initialzeTimes } from "./reducer";

describe("updateTimes function", () => {
  it("should return updated times based on the input date", () => {
    // Mock the input date for testing
    const inputDate = "2023-07-22"; // You can use any date in the format "yyyy-mm-dd"

    // Call the function with the input date
    const updatedTimes = updateTimes(inputDate);

    // Define the expected output based on the input date
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00"];

    // Assert that the output matches the expected times
    expect(updatedTimes).toEqual(expectedTimes);
  });
});

describe("initializeTimes function", () => {
  it("should return the initial times array", () => {
    // Call the function
    const timesArray = initialzeTimes();

    // Define the expected output for the initial times
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00"];

    // Assert that the output matches the expected times
    expect(timesArray).toEqual(expectedTimes);
  });
});
