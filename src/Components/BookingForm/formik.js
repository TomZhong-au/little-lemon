import * as Yup from "yup";

export const initialValues = {
  date: "",
  time: "18:00",
  guests: 1,
  occasion: "Anniversary",
};

export const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Date is required")
    .test(
      "futureDate",
      "Date must be within the next 90 days",
      function (value) {
        // Parse the date string in "yyyy-mm-dd" format into a Date object
        const dateObject = Yup.date(value).isValid() ? new Date(value) : null;

        if (!dateObject) {
          return false;
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set the time part to midnight (00:00:00) to ignore the time component

        const maxDate = new Date(today.getTime() + 90 * 24 * 60 * 60 * 1000); // Add 90 days to today's date
        return dateObject >= today && dateObject <= maxDate;
      }
    ),
  time: Yup.string()
    .required()
    .test("valid time", "Booking is available from 11:00 - 22:00", (value) => {
      const time = parseInt(value.split(":")[0]);
      return (time >= 11) & (time <= 22);
    }),
  guests: Yup.number().required().max(10).min(1),
  occasion: Yup.string().required(),
});
