"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./navbar"));

export default function NavbarWrapper() {
  return <Navbar />;
}
