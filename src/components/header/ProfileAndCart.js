import React from "react";
import { CommonButton } from "../commonButton";
import { Grid, IconButton } from "@mui/material";
import Image from "next/image";

export default function ProfileAndCart({ showLabel }) {
  const basicButtons = [
    { label: "John", image: "/user.svg" },
    { label: 1234, image: "/cart.svg" },
    ,
  ];

  if (!showLabel) {
    basicButtons.push({ label: 1234, image: "/menu.svg" });
  }

  const buttons = basicButtons.map((o) => {
    return (
      <Grid sm={showLabel ? 6 : 4} key={o.label}>
        {showLabel ? (
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
            fullWidth={showLabel}
          >
            {o.label}
          </CommonButton>
        ) : (
          <IconButton
            sx={{
              height: "50px",
              width: "50px",
              border: "1px solid var(--gray2)",
              borderRadius: "5px",
            }}
          >
            <Image alt="user icon" width={18} height={18} src={o.image} />
          </IconButton>
        )}
      </Grid>
    );
  });
  return <Grid container>{buttons}</Grid>;
}
