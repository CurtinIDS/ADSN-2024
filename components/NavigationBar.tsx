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

const NavigationBar = () => {
  return (
    <Navbar className="bg-blue-navbar" isBordered maxWidth="full">
      <NavbarBrand>
        <Image
          src="/ADSN-2024/ADSN_Logo.png"
          alt="ADSN Logo"
          width="0"
          height="0"
          className="min-w-[150px] h-[35px]"
          priority
        />
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-y-4 gap-x-10"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href="#about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href="#key-dates"
          >
            Key Dates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white font-extrabold"
            href="#committees"
          >
            Committees
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
