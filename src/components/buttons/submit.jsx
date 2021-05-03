import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

export const SubmitButton = styled.button`
  position: relative;
  display: flex;
  height: 58px;
  border: 0px;
  margin-left: -64px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const SearchIcon = styled(BiSearch)`
  color: white;
  font-size: 30px;
`;
