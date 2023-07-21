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
      <button className="hero-cta">Reserve a Table</button>
    </div>
  );
};

export default TextContent;
