export const PrimaryButton = ({ icon, children, onClick, disabled }) => {
  return (
    <button className="primary-btn" onClick={onClick} disabled={disabled}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {icon ? <span style={{ paddingRight: ".5rem" }}>{icon}</span> : null}

        <span>{children}</span>
      </div>
    </button>
  );
};

export const SecondaryButton = ({ icon, children, onClick, disabled }) => {
  return (
    <button className="secondary-btn" onClick={onClick} disabled={disabled}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {icon ? <span style={{ paddingRight: ".5rem" }}>{icon}</span> : null}

        <span>{children}</span>
      </div>
    </button>
  );
};
