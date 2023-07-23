import { useEffect } from "react";
import { PrimaryButton } from "../Buttons";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import { initialValues, validationSchema } from "./formik";

const BookingForm = ({ availableTimes, changeTimes, submitForm }) => {
  return (
    <>
      <h1 className="booking-title">Book a Table</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => submitForm(values)}
      >
        {(formik) => (
          <Form
            style={{
              width: "350px",
              marginBottom: "2rem",
            }}
          >
            <label htmlFor="res-date">Choose date</label>
            <Field
              className="booking-input"
              type="date"
              id="res-date"
              name="date"
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

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <PrimaryButton disabled={!formik.isValid}>Confirm</PrimaryButton>
              <FormikObserver changeTimes={changeTimes} />
            </div>
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
