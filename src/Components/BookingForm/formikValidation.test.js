import { validationSchema } from "./formik"; // Replace with the actual file path

describe("Validation Schema Tests", () => {
  test("Valid date within the next 90 days", () => {
    const validDate = new Date();
    validDate.setDate(validDate.getDate() + 60); // Set a date 60 days from today

    const validData = {
      date: validDate.toISOString().slice(0, 10), // Convert date to "yyyy-mm-dd" format
      time: "15:30",
      guests: 5,
      occasion: "Birthday",
    };

    return validationSchema.isValid(validData).then((isValid) => {
      expect(isValid).toBe(true);
    });
  });

  test("Invalid date (in the past)", () => {
    const invalidDate = new Date();
    invalidDate.setDate(invalidDate.getDate() - 10); // Set a date 10 days in the past

    const invalidData = {
      date: invalidDate.toISOString().slice(0, 10), // Convert date to "yyyy-mm-dd" format
      time: "14:00",
      guests: 3,
      occasion: "Anniversary",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  test("Invalid time (before 11:00)", () => {
    const invalidData = {
      date: "2023-12-31",
      time: "09:30",
      guests: 8,
      occasion: "Party",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  test("Invalid time (after 22:00)", () => {
    const invalidData = {
      date: "2023-12-31",
      time: "23:30",
      guests: 2,
      occasion: "Gathering",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  test("Invalid number of guests (less than 1)", () => {
    const invalidData = {
      date: "2023-12-31",
      time: "20:00",
      guests: 0,
      occasion: "Dinner",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  test("Invalid number of guests (more than 10)", () => {
    const invalidData = {
      date: "2023-12-31",
      time: "18:30",
      guests: 15,
      occasion: "Celebration",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  test("Invalid occasion (empty string)", () => {
    const invalidData = {
      date: "2023-12-31",
      time: "16:00",
      guests: 4,
      occasion: "",
    };

    return validationSchema.isValid(invalidData).then((isValid) => {
      expect(isValid).toBe(false);
    });
  });

  // Add more tests as needed for various edge cases and scenarios
});
