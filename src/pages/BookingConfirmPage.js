import ConfirmBooking from "../Components/ConfirmBooking/ConfirmBooking";

const BookingConfirmPage = () => {
  return (
    <main
      className="section-grid"
      style={{ backgroundColor: "#edefee", height: "65vh" }}
    >
      <div className="section-content-wrapper flex-container booking-section">
        <h1 className="booking-title">Booking Successful.</h1>
        <ConfirmBooking />
      </div>
    </main>
  );
};

export default BookingConfirmPage;
