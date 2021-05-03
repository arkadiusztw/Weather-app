import React from "react";
import styled from "styled-components";
import Weather from "../components/weather/Weather";
const Main = () => {
  return (
    <Container>
      <Weather />
    </Container>
  );
};
export default Main;

const Container = styled.div`
  width: 100vw;
  height: auto;
  position: relative;
  background: black;
  overflow: hidden;
`;
