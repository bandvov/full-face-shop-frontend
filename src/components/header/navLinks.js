import React, { useMemo } from "react";
import { HEADER_URLS } from "../../configs/urls";
import { Grid } from "@mui/material";
import { CommonButton } from "../commonButton";

export default function NavLinks() {
  const links = useMemo(() => {
    return HEADER_URLS.map(({ url, name }) => {
      return (
        <Grid align={"center"} xs item aria-current="page" key={url}>
          <CommonButton
            fullWidth
            href={url}
            sx={{
              backgroundColor: "white",
              width: "100%",
              padding: "0",
              color: "var(--black) !important",
              ":hover": {
                backgroundColor: "white",
                color: "var(--orange) !important",
              },
            }}
          >
            {name}
          </CommonButton>
        </Grid>
      );
    });
  }, []);

  return (
    <Grid
      gap={2}
      align={"center"}
      columns={12}
      border={"1px solid"}
      container
      height="100%"
      alignItems={"center"}
    >
      {links}
      <Grid item xs>
        <CommonButton
          style={{ backgroundColor: "white", color: "var(--black)" }}
        >
          More
        </CommonButton>
      </Grid>
    </Grid>
  );
}
