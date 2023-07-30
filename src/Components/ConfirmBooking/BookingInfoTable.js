const BookingInfoTable = ({ bookinginfo }) => {
  const { date, time, guests, occasion } = bookinginfo;

  return (
    <table style={{ fontSize: "1.2rem" }}>
      <tbody>
        <tr>
          <td>Date</td>
          <td>{date}</td>
        </tr>

        <tr>
          <td>Time</td>
          <td>{time}</td>
        </tr>

        <tr>
          <td>Guests</td>
          <td>{guests}</td>
        </tr>

        <tr>
          <td>Occasion</td>
          <td>{occasion}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingInfoTable;
