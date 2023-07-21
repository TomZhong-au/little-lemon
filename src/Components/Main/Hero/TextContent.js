const TextContent = () => {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 className="hero-title">Little Lemon</h2>
      <span className="hero-subtitle">Chicago</span>
      <span className="hero-text">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </span>
      <a className="hero-cta" href="/booking">
        Reserve a Table
      </a>
    </div>
  );
};

export default TextContent;
