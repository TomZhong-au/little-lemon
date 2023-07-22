import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("rendering booking form", () => {
  const availableTimes = ["1:00", "2:00", "3:00"];
  render(
    <BookingForm availableTimes={availableTimes} changeTimes={() => {}} />
  );

  const dateInput = screen.getByLabelText("Choose date");
  const timeSelect = screen.getByLabelText("Choose time");
  const submitBtn = screen.getByDisplayValue("Make Your reservation");

  expect(dateInput).toBeInTheDocument();
  expect(timeSelect).toBeInTheDocument();
  expect(submitBtn).toBeInTheDocument();

  const timeOptions = timeSelect.querySelectorAll("option");

  expect(timeOptions.length).toBe(availableTimes.length);
});
