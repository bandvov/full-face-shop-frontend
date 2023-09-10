import { URLS } from "@/configs/urls";
import Link from "next/link";
import React from "react";

export default function FirstHeaderRow() {
  return (
    <div class="grid grid-cols-[auto_minmax(900px,_1fr)_100px] gap-x-3 pt-4 pb-5 border border-black">
      <div style={{ border: "1px solid red" }}>FirstHeaderRow</div>
      <div style={{ border: "1px solid red" }} class="border">
        adadad dasdasd
      </div>
    </div>
  );
}
