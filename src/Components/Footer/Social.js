import { ItemWrapper, SubTitle } from "./Styles";

const social = [
  { text: "Address", url: "/" },
  { text: "Facebook", url: "/" },
  { text: "Twitter", url: "/" },
];

const Social = () => {
  return (
    <ItemWrapper>
      <SubTitle>Social</SubTitle>
      <ul>
        {social.map(({ text, url }) => (
          <li>{text}</li>
        ))}
      </ul>
    </ItemWrapper>
  );
};

export default Social;
