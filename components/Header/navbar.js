"use client";

import React from "react";
// import router, pathname
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  return (
    <div className="container ">
      <img src="/images/logo/logo_esgMaster2.svg" alt="logo" className="logo" />
    </div>
  );
}
