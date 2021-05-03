import styled from "styled-components";

const SubTitle = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.h2``;

export default SubTitle;
