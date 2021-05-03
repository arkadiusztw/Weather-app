import styled from "styled-components";
import { themeData } from "../../data/themeData";

const Icons = (children) => {
  return (
    <Icon>
      <Img src={themeData[children].img} alt=""></Img>
    </Icon>
  );
};

const Icon = styled.div`
  display: flex;
  margin: 0 auto;
  width: 30%;
  margin-top: 10vh;
  margin-bottom: 10vh;
  height: auto;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
`;

export default Icons;
