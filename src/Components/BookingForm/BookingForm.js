import { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { initialValues, validationSchema } from "./formik";
import "./BookingForm.css";
const today = new Date().toISOString().split("T")[0];

const BookingForm = ({ availableTimes, changeTimes, submitForm }) => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {(formik) => (
          <Form>
            <label htmlFor="res-date">Choose date</label>
            <Field
              className="booking-input"
              type="date"
              id="res-date"
              name="date"
              min={today}
            />
            <div className="booking-err-msg">
              <ErrorMessage name="date" />
            </div>

            <label htmlFor="res-time">Choose time</label>
            <Field
              id="res-time"
              name="time"
              className="booking-input"
              as="select"
            >
              {availableTimes.map((time) => (
                <option key={time} className="booking-input">
                  {time}
                </option>
              ))}
            </Field>
            <div className="booking-err-msg">
              <ErrorMessage name="time" />
            </div>

            <label htmlFor="guests">Number of guests</label>
            <Field
              className="booking-input"
              type="number"
              min="1"
              max="10"
              id="guests"
              name="guests"
            />
            <div className="booking-err-msg">
              <ErrorMessage name="guests" />
            </div>

            <label htmlFor="occasion">Occasion</label>
            <Field
              id="occasion"
              name="occasion"
              className="booking-input"
              as="select"
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </Field>
            <div className="booking-err-msg">
              <ErrorMessage name="occasion" />
            </div>

            <label htmlFor="username">Your Name</label>
            <Field
              id="username"
              name="username"
              className="booking-input"
            ></Field>
            <div className="booking-err-msg">
              <ErrorMessage name="username" />
            </div>

            <label htmlFor="email">Email Address</label>
            <Field id="email" name="email" className="booking-input"></Field>
            <div className="booking-err-msg">
              <ErrorMessage name="email" />
            </div>

            <FormikObserver changeTimes={changeTimes} />

            <button
              type="submit"
              disabled={!formik.isValid}
              className="booking-submit-btn"
            >
              Confirm Booking
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default BookingForm;

const FormikObserver = ({ changeTimes }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    changeTimes({ payload: values.date });
  }, [values.date, changeTimes]);
};
