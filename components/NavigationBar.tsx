"use client";

import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import AdsnButton from "@/components/AdsnButton";
import React from "react";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <Navbar className="bg-blue-navbar md:py-1" isBordered maxWidth="full">
      <NavbarBrand>
        <Link href="/ADSN-2024/">
          <Image
            src="/ADSN-2024/ADSN_Logo.png"
            alt="ADSN Logo"
            width="0"
            height="0"
            className="min-w-[150px] h-[35px]"
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-y-4 gap-x-10"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href={pathname === "/" ? "#about" : "/ADSN-2024/#about"}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href={pathname === "/" ? "#key-dates" : "/ADSN-2024/#key-dates"}
          >
            Key Dates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href={pathname === "/" ? "#committees" : "/ADSN-2024/#committees"}
          >
            Committees
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href="/ADSN-2024/locations"
          >
            Locations
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href="mailto:adsn2024@curtin.edu.au"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AdsnButton
            text="Submit Abstract"
            url="https://curtin.au1.qualtrics.com/jfe/form/SV_0Pdhwdfxu0NWJH8"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
