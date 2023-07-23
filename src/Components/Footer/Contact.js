import { ItemWrapper, SubTitle } from "./Styles";
const contact = [
  { text: "Address", url: "/" },
  { text: "Phone number", url: "/" },
  { text: "Email", url: "/" },
];

const Contact = () => {
  return (
    <ItemWrapper>
      <SubTitle>Contact</SubTitle>
      <ul>
        {contact.map(({ text, url }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </ItemWrapper>
  );
};

export default Contact;
