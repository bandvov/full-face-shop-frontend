import Link from "next/link";
import React from "react";

export default function CommonLink({ children, style, ...rest }) {
  return (
    <Link style={style} {...rest}>
      {children}
    </Link>
  );
}
