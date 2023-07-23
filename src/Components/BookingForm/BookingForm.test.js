import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Helper function to fill the form fields with values
const fillForm = (values) => {
  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: values.date },
  });
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: values.time },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: values.guests.toString() },
  });
  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: values.occasion },
  });
};

const availableTimes = ["17:00", "18:00", "19:00", "20:00"];
const changeTimes = () => {};
const submitForm = () => {};

describe("BookingForm", () => {
  it("should show an error message when date is not selected", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        changeTimes={changeTimes}
        submitForm={submitForm}
      />
    );

    // Click the Confirm button without filling the form
    fireEvent.click(screen.getByText("Confirm"));

    // Find the error message for the date field
    const dateErrorMessage = await screen.findByText("Date is required");
    expect(dateErrorMessage).toBeInTheDocument();
  });

  it("should show an error message when date is not within the next 90 days", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        changeTimes={changeTimes}
        submitForm={submitForm}
      />
    );

    // Fill the form with a date that is beyond 90 days from today
    fillForm({
      date: "2023-12-01",
      time: "13:00",
      guests: 4,
      occasion: "Birthday",
    });

    // Click the Confirm button
    fireEvent.click(screen.getByText("Confirm"));

    // Find the error message for the date field
    const dateErrorMessage = await screen.findByText(
      "Date must be within the next 90 days"
    );
    expect(dateErrorMessage).toBeInTheDocument();
  });

  it("should show an error message when guests are not within the valid range", async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        changeTimes={changeTimes}
        submitForm={submitForm}
      />
    );

    // Fill the form with an invalid number of guests (less than 1)
    fillForm({
      date: "2023-07-25",
      time: "14:30",
      guests: 0,
      occasion: "Birthday",
    });

    // Click the Confirm button
    fireEvent.click(screen.getByText("Confirm"));

    // Find the error message for the guests field
    const guestsErrorMessage = await screen.findByText(
      "guests must be greater than or equal to 1"
    );
    expect(guestsErrorMessage).toBeInTheDocument();
  });

  // Add more test cases for other scenarios as needed.
});
