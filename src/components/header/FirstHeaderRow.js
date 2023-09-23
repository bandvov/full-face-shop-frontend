import React from "react";
import NavLinks from "./navLinks";
import SelectCity from "../SelectCity";
import CallMe from "./CallMe";
import { Grid } from "@mui/material";
import RequestCall from "./RequestCall";

export default function FirstHeaderRow() {
  return (
    <Grid container padding="17px 0 15px">
      <Grid xs={2} item>
        <SelectCity />
      </Grid>
      <Grid xs={7} item>
        <NavLinks />
      </Grid>
      <Grid xs={3} item>
        <Grid container>
          <Grid item xs={6} border={"1px solid"} align={"center"}>
            <RequestCall />
          </Grid>
          <Grid item xs={6} border={"1px solid"} align={"center"}>
            <CallMe />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
