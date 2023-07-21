import { Formik, Form, Field, ErrorMessage } from "formik";

const defaultValues = {
  date: getTodayDateString(),
  time: "18:00",
  number: 2,
  occasion: "Birthday",
};
const BookingForm = () => {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <Form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <label htmlFor="res-date">Choose date</label>
          <Field type="date" name="date" />
          <ErrorMessage name="date" />

          <label htmlFor="res-time">Choose time</label>
          <Field name="time" as="select">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </Field>
          <ErrorMessage name="time" />

          <label htmlFor="guests">Number of guests</label>
          <Field type="number" placeholder="1" min="1" max="10" name="number" />

          <label htmlFor="occasion">Occasion</label>
          <Field name="occasion" as="select">
            <option>Birthday</option>
            <option>Anniversary</option>
          </Field>

          <input type="submit" value="Make Your reservation" />
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;

/**
 * Gets the current date in the format "dd/mm/yyyy".
 * @returns {string} The current date in the format "dd/mm/yyyy".
 */
function getTodayDateString() {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();

  // Concatenate the day, month, and year with "/" separator
  return `${year}-${month}-${day}`;
}
