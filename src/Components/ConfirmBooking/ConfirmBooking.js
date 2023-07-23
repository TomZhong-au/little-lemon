import { PrimaryButton, SecondaryButton } from "../Buttons";
import { BsCalendarDay } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import BookingInfoTable from "./BookingInfoTable";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ConfirmBooking = () => {
  const [bookingInfo, setBookingInfo] = useState({});
  useEffect(() => {
    const value = localStorage.getItem("confirmedBooking");
    if (value) setBookingInfo(JSON.parse(value));
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <h1 className="booking-title">Booking Success </h1>

      <h3>Your booking informaiton:</h3>
      <BookingInfoTable bookinginfo={bookingInfo} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "50%",
          marginTop: "5rem",
        }}
      >
        <PrimaryButton
          icon={<BsCalendarDay size={"20px"} />}
          onClick={() => navigate("/booking")}
        >
          Another Booking
        </PrimaryButton>

        <SecondaryButton
          icon={<AiOutlineHome size={"20px"} />}
          onClick={() => navigate("/")}
        >
          Back to Home
        </SecondaryButton>
      </div>
    </>
  );
};

export default ConfirmBooking;
