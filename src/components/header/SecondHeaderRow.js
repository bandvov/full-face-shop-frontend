import Link from "next/link";
import React from "react";
import ProfileAndCart from "./ProfileAndCart";
import { Grid } from "@mui/material";
import CommonLink from "../link";
import SearchInput from "../SearchInput";

export default function SecondHeaderRow() {
  return (
    <Grid container height={"60px"}>
      <Grid item xs={2}>
        <CommonLink href="#">
          <span>Happy Face</span>
        </CommonLink>
      </Grid>
      <Grid item xs={7} paddingY={0} paddingX={1} >
        <SearchInput />
      </Grid>
      <Grid item xs={3} paddingLeft={1}>
        <ProfileAndCart />
      </Grid>
    </Grid>
  );
}
