import { navigation } from "../Nav";
import { ItemWrapper, SubTitle } from "./Styles";

const Navigation = () => {
  return (
    <ItemWrapper>
      <SubTitle>Navigation</SubTitle>
      <ul>
        {navigation.map(({ text, url }) => (
          <li>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </ItemWrapper>
  );
};

export default Navigation;
