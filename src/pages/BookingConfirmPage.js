import ConfirmBooking from "../Components/ConfirmBooking/ConfirmBooking";

const BookingConfirmPage = () => {
  return (
    <main
      className="section-grid"
      style={{ backgroundColor: "#edefee", height: "65vh" }}
    >
      <div className="container flex-container booking-section">
        <ConfirmBooking />
      </div>
    </main>
  );
};

export default BookingConfirmPage;
