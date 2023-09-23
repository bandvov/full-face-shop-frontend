import Link from "next/link";
import React from "react";

export default function CommonLink({ children, ...rest }) {
  return (
    <Link {...rest}>
      {children}
    </Link>
  );
}
