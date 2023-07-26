import { NAVLINKS } from "../../pages/routes";
import { ItemWrapper, SubTitle } from "./Styles";

const Navigation = () => {
  return (
    <ItemWrapper>
      <SubTitle>Navigation</SubTitle>
      <ul>
        {NAVLINKS.map(({ text, url }) => (
          <li key={text}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </ItemWrapper>
  );
};

export default Navigation;
