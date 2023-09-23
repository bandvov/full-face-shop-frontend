import Link from "next/link";
import React from "react";
import ProfileAndCart from "./ProfileAndCart";

export default function SecondHeaderRow() {
  return (
    <div className="first-header-row gap-x-3 pt-4 pb-5 border border-black">
      <Link
        href="https://flowbite.com/"
        class="flex items-center border border-black"
      >
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Happy Face
        </span>
      </Link>
      <div className="border border-black">search</div>
   <ProfileAndCart />
    </div>
  );
}
