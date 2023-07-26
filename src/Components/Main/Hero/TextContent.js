const TextContent = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        paddingLeft: "1rem",
      }}
    >
      <h2 className="hero-title" aria-label="restaurant name">
        Little Lemon
      </h2>
      <span className="hero-subtitle" aria-label="restaurant location">
        Chicago
      </span>
      <span className="hero-text" aria-label="restaurant description">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </span>
      <a className="hero-cta" href="/booking" aria-label="booking button">
        Reserve a Table
      </a>
    </div>
  );
};

export default TextContent;
