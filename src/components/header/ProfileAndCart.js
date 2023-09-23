import React from "react";
import { CommonButton } from "../commonButton";
import { Grid } from "@mui/material";

export default function ProfileAndCart() {
  return (
    <Grid container direction="row">
      <Grid sm={6} item paddingRight={1}>
        <CommonButton
          sx={{
            filter: "box-shadow: 0px 4px 4px 0px #00000040",
            backgroundColor: "white",
            border: "1px solid var(--gray2)",
            color: "var(--black) !important",
            ":hover": {
              backgroundColor: "white",
              color: "var(--black) !important",
            },
          }}
          fullWidth
        >
          John
        </CommonButton>
      </Grid>
      <Grid sm={6} item paddingLeft={1}>
        <CommonButton
          sx={{
            filter: "box-shadow: 0px 4px 4px 0px #00000040",
            backgroundColor: "white",
            border: "1px solid var(--gray2)",
            color: "var(--black) !important",
            ":hover": {
              backgroundColor: "white",
              color: "var(--black) !important",
            },
          }}
          fullWidth
        >
          John
        </CommonButton>
      </Grid>
    </Grid>
  );
}
