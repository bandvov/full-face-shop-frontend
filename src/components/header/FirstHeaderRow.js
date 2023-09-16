import React from "react";
import NavLinks from "./NavLinks";
import SelectCity from "../SelectCity";
import CallMe from "./CallMe";

export default function FirstHeaderRow() {
  return (
    <div className="first-header-row gap-x-3 pt-4 pb-5 border border-black">
      <SelectCity />

      <NavLinks />
      <CallMe />
    </div>
  );
}
