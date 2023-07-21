export const navigation = [
  { text: "Home", url: "/" },
  { text: "About", url: "/" },
  { text: "Menu", url: "/" },
  { text: "Reservations", url: "/" },
  { text: "Order Online", url: "/" },
  { text: "Login", url: "/" },
];

const Nav = () => {
  return (
    <nav>
      <ul>
        {navigation.map(({ text, url }) => (
          <li>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
