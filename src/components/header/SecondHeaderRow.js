import React from "react";
import ProfileAndCart from "./ProfileAndCart";
import { Grid } from "@mui/material";
import CommonLink from "../link";
import SearchInput from "../SearchInput";
import { useViewportSize } from "@/hooks/useViewportSize";

export default function SecondHeaderRow() {
  const { isDesktop } = useViewportSize();

  return (
    <Grid container height={"60px"}>
      <Grid item xs={2}>
        <CommonLink href="#">
          <span>Happy Face</span>
        </CommonLink>
      </Grid>
      <Grid item xs={7}>
        <SearchInput style={{ height: { sm: "50px", lg: "60px" } }} />
      </Grid>
      <Grid
        border={"1px solid red"}
        item
        xs={3}
        paddingLeft={{ lg: 1 }}
        height={{
          xs: "50px",
          lg: "60px",
        }}
        textAlign={"end"}
      >
        <ProfileAndCart showLabel={isDesktop} />
      </Grid>
    </Grid>
  );
}
