import Delivery from "./Delivery";

export default function MenuCard({ name, price, description, photo }) {
  return (
    <div className="menu-card">
      <div
        aria-label="menu photo"
        style={{ width: "265px", height: "175px", overflow: "hidden" }}
      >
        <img
          src={`./assets/${photo}`}
          alt="menu"
          width={265}
          className="menu-photo"
        />
      </div>

      <div style={{ padding: "1.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div aria-label="menu name" className="menu-name">
            {name}
          </div>
          <div className="menu-card-price">{price.toFixed(2)}</div>
        </div>
        <div className="menu-card-description">{description}</div>
        <div className="menu-card-order-btn">
          <Delivery />
        </div>
      </div>
    </div>
  );
}
