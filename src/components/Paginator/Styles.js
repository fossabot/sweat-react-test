import styled from "styled-components";
import theme from "../../config/theme";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const NavigationIcon = styled.div`
  cursor: ${({ disabled }) => (disabled ? "inherit" : "pointer")};
`;

export const Number = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  background-color: ${({ active }) =>
    active ? theme.palette.action.disabledBackground : theme.palette.primary.main};
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  margin: 0 5px;
  span {
    color: ${({ active }) =>
      active ? theme.palette.action.disabled : theme.palette.primary.contrastText};
    font-family: "Roboto", sans-serif;
    font-size: 20px;
  }
`;
