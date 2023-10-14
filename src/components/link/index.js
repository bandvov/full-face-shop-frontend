import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: var(--black);
  :hover {
    cursor: pointer;
    background-color: white;
    color: var(--orange) !important;
  }
`;

export default function CommonLink({ children, style, ...rest }) {
  return (
    <StyledLink style={style} {...rest}>
      {children}
    </StyledLink>
  );
}
