export const PrimaryButton = ({ icon, children, onClick }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <span style={{ paddingRight: ".25rem" }}>{icon}</span>

        <span style={{ paddingLeft: ".25rem" }}>{children}</span>
      </div>
    </button>
  );
};

export const SecondaryButton = ({ icon, children, onClick }) => {
  return (
    <button className="secondary-btn" onClick={onClick}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <span style={{ paddingRight: ".25rem" }}>{icon}</span>

        <span style={{ paddingLeft: ".25rem" }}>{children}</span>
      </div>
    </button>
  );
};
