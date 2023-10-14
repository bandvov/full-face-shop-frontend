import { CATEGORIES } from "@/configs/urls";
import { Grid, Menu, MenuItem, MenuList } from "@mui/material";
import Link from "next/link";
import React from "react";
import CommonLink from "../link";
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
