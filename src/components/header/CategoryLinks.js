import { CATEGORIES } from "@/configs/urls";
import { Grid } from "@mui/material";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import CommonLink from "../link";

export default function CategoryLinks() {
  const pathname = usePathname();

  const links = useMemo(() => {
    return CATEGORIES.map(({ url, name }) => {
      return (
        <Grid xs item aria-current="page" key={url}>
          <CommonLink href={url}>{name}</CommonLink>
        </Grid>
      );
    });
  }, [pathname]);

  return (
    <Grid
      gap={2}
      columns={12}
      container
      height="100%"
      alignItems={"center"}
      padding={"20px 0"}
    >
      {links}
    </Grid>
  );
}
