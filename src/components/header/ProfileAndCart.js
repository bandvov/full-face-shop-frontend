import React from "react";
import { CommonButton } from "../commonButton";
import { Grid } from "@mui/material";

export default function ProfileAndCart() {
  return (
    <Grid border={"1px solid red"} container direction="row">
      <Grid sm={6} item paddingRight={1}>
        <CommonButton fullWidth>John</CommonButton>
      </Grid>
      <Grid sm={6} item paddingLeft={1}>
        <CommonButton fullWidth>John</CommonButton>
      </Grid>
    </Grid>
  );
}
