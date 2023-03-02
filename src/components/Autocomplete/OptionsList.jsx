import { ListStyle, LiStyle } from "./styled";

const OptionsList = ({ options }) => {
  return (
    <ListStyle>
      <ul>
        {options.map((option) => {
          return (
            <LiStyle>
              <li>{option.name}</li>
            </LiStyle>
          );
        })}
      </ul>
    </ListStyle>
  );
};

export default OptionsList;
