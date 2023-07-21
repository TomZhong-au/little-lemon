import BookingForm from "../Components/BookingForm/BookingForm";

const BookingPage = () => {
  return (
    <main className="section-grid">
      <div
        className="section-content-wrapper flex-container"
        style={{
          justifyContent: "center",
          padding: "2rem 0",
        }}
      >
        <BookingForm />
      </div>
    </main>
  );
};

export default BookingPage;
