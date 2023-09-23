import React, { useMemo } from "react";
import { HEADER_URLS } from "../../configs/urls";
import { Grid } from "@mui/material";
import { CommonButton } from "../commonButton";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  const links = useMemo(() => {
    return HEADER_URLS.map(({ url, name }) => {
      const navLinkColor =
        pathname === url
          ? "var(--orange) !important"
          : "var(--black) !important";
      return (
        <Grid align={"center"} xs item aria-current="page" key={url}>
          <CommonButton
            fullWidth
            href={url}
            sx={{
              backgroundColor: "white",
              width: "100%",
              padding: "0",
              color: navLinkColor,
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
  }, [pathname]);

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
