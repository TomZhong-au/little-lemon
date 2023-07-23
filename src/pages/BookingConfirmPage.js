import ConfirmBooking from "../Components/ConfirmBooking/ConfirmBooking";

const BookingConfirmPage = () => {
  return (
    <main
      className="section-grid"
      style={{ backgroundColor: "#edefee", height: "65vh" }}
    >
      <div className="section-content-wrapper flex-container booking-section">
        <ConfirmBooking />
      </div>
    </main>
  );
};

export default BookingConfirmPage;
