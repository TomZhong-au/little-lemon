export const ROUTES = {
  home: { text: "Home", url: "/", isAnchor: true },
  about: { text: "About", url: "/about", isAnchor: true },
  menu: { text: "Menu", url: "/menu", isAnchor: true },
  booking: { text: "Reservations", url: "/booking", isAnchor: true },
  order: { text: "Order Online", url: "/order", isAnchor: true },
  login: { text: "Login", url: "/login", isAnchor: true },
  confirm: { text: "Confirm", url: "/confirm", isAnchor: false },
};

export const NAVLINKS = Object.values(ROUTES).filter(
  (entry) => entry.isAnchor === true
);
