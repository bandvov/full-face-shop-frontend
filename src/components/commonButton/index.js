import { Button, styled } from "@mui/material";

export const CommonButton = styled(Button)`
 
  text-transform: none;
  border-radius: 5px;
  color: white !important;
  padding: 6px 30px;
  background-color: ${({ disabled }) =>
    disabled ? "var(--gray2)" : "var(--orange)"};
  :hover {
    background-color: ${({ disabled }) =>
      disabled ? "var(--gray2)" : "var(--dark-orange)"};
  }
`;
