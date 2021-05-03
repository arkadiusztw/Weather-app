import styled from "styled-components";

const Title = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Header = styled.h2`
  padding: 1rem;
  white-space: wrap;
  text-align: center;
`;

export default Title;
