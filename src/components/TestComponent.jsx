import { useContext } from "react";
import LocationContext from "../context";
import { TestDiv } from "./TestComponent/styled";

const TestComponent = () => {
  const location = useContext(LocationContext);
  const { latitude, longitude } = location;

  return (
    <TestDiv>
      {latitude} {longitude}
    </TestDiv>
  );
};

export default TestComponent;
