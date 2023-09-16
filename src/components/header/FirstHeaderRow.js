import { HEADER_URLS } from "@/configs/urls";
import Link from "next/link";
import React from "react";
import SelectCity from "../buttons/SelectCity";
import Image from "next/image";
import CommonLink from "../link";
import NavLinks from "./navLinks";
import CallMe from "./callMe";

export default function FirstHeaderRow() {
  return (
    <div className="first-header-row gap-x-3 pt-4 pb-5 border border-black">
      <SelectCity />

      <NavLinks />
      <CallMe />
    </div>
  );
}
