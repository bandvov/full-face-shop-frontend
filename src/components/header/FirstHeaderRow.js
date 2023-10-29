import React from "react";
import NavLinks from "./navLinks";
import SelectCity from "../SelectCity";
import CallMe from "./CallMe";
import { Grid } from "@mui/material";
import RequestCall from "./RequestCall";
import { useViewportSize } from "@/hooks/useViewportSize";

export default function FirstHeaderRow() {
  const { isDesktop } = useViewportSize();
  return (
    <Grid container padding="17px 0 15px">
      <Grid sm={7} md={8} lg={2} item>
        <SelectCity />
      </Grid>
      {isDesktop && (
        <Grid xs={7} item>
          <NavLinks />
        </Grid>
      )}
      <Grid sm={5} md={4} lg={3} item>
        <Grid container>
          <Grid item sm={7} lg={6} border={"1px solid"} align={"center"}>
            <RequestCall />
          </Grid>
          <Grid item sm={5} lg={6} border={"1px solid"} align={"center"}>
            <CallMe />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
