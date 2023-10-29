import { Grid } from "@mui/material";
import React from "react";
import CategoryLinks from "./CategoryLinks";

export default function ThirdHeaderRow() {
  return (
    <nav>
      <Grid container>
        <Grid item md={9}>
          <CategoryLinks />
        </Grid>
        <Grid item md={3}>
          3
        </Grid>
      </Grid>
    </nav>
  );
}
