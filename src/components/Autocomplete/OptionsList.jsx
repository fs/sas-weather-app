const OptionsList = ({ options }) => {
  return options.length ? (
    <ul>
      {options.map((option) => {
        return <li>{option.name}</li>;
      })}
    </ul>
  ) : null;
};

export default OptionsList;
