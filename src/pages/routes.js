export const ROUTES = {
  home: { text: "Home", path: "/", isAnchor: true },
  about: { text: "About", path: "/about", isAnchor: true },
  menu: {
    text: "Menu",
    path: "./assets/menu.webp",
    isAnchor: true,
    type: "file",
  },
  booking: { text: "Reservations", path: "/booking", isAnchor: true },
  order: { text: "Order Online", path: "/order", isAnchor: true },
  login: { text: "Login", path: "/login", isAnchor: true },
  confirm: { text: "Confirm", path: "/confirm", isAnchor: false },
};

export const NAVLINKS = Object.values(ROUTES).filter(
  (entry) => entry.isAnchor === true
);
