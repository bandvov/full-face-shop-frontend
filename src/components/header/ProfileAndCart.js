import React from "react";
import { CommonButton } from "../commonButton";
import { Grid } from "@mui/material";
import Image from "next/image";

export default function ProfileAndCart() {
  const buttons = [
    { label: "John", image: "/user.svg" },
    { label: 1234, image: "/cart.svg" },
  ].map((o) => {
    return (
      <Grid sm={6} key={o.label} paddingRight={o.image === "/user.svg" && 1}>
        <CommonButton
          aria-label={o.label}
          startIcon={
            <Image alt="user icon" width={18} height={18} src={o.image} />
          }
          style={{
            padding: "6px",
          }}
          sx={{
            textAlign: "start",
            filter: "box-shadow: 0px 4px 4px 0px #00000040",
            backgroundColor: "white",
            border: "1px solid var(--gray2)",
            color: "var(--black) !important",
            overflow: "hidden",
            height: "60px",
            ":hover": {
              backgroundColor: "white",
              color: "var(--black) !important",
            },
          }}
          fullWidth
        >
          {o.label}
        </CommonButton>
      </Grid>
    );
  });
  return <Grid container>{buttons}</Grid>;
}
