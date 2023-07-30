import ConfirmBooking from "../Components/ConfirmBooking/ConfirmBooking";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const BookingConfirmPage = () => {
  return (
    <main
      style={{
        height: "65vh",
        borderTop: "0.5rem solid var(--primary-green)",
      }}
    >
      <div className="container flex-container booking-section">
        <FontAwesomeIcon icon={faCircleCheck} size="3x" />

        <ConfirmBooking />
      </div>
    </main>
  );
};

export default BookingConfirmPage;
