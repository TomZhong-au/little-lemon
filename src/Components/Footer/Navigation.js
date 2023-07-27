import { NAVLINKS } from "../../pages/routes";
import { ItemWrapper, SubTitle } from "./Styles";

const Navigation = () => {
  return (
    <ItemWrapper>
      <SubTitle>Navigation</SubTitle>
      <ul>
        {NAVLINKS.map(({ text, path }) => (
          <li key={text}>
            <a href={path}>{text}</a>
          </li>
        ))}
      </ul>
    </ItemWrapper>
  );
};

export default Navigation;
