import Image from "next/image";
import React from "react";
import { CommonButton } from "../commonButton";

export default function RequestCall() {
  return (
    <div style={{ display: "flex", verticalAlign: "middle" }}>
      <CommonButton
        href="mailto:123414"
        fullWidth
        style={{
          backgroundColor: "white",
          color: "var(--black)",
        }}
      >
        <Image
          width={24}
          height={24}
          style={{ marginRight: "5px" }}
          alt="phone call"
          src={"/phone-call.svg"}
        />
        <span>022(03) 59-49-45</span>
      </CommonButton>
    </div>
  );
}
