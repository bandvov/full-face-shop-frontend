import React from "react";
import { CommonButton } from "../commonButton";

export default function CallMe() {
  return (
    <CommonButton
      fullWidth
      style={{ backgroundColor: "white", color: "var(--orange)" }}
    >
      Call me!
    </CommonButton>
  );
}
