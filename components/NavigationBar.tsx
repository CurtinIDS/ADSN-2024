"use client";

import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import Image from "next/image";
import AdsnButton from "@/components/AdsnButton";
import React from "react";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  link: string;
  subtabs?: MenuItem[];
}

const NavigationBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      name: "About",
      link: pathname === "/" ? "#about" : "/ADSN-2024/#about",
    },
    {
      name: "Key Dates",
      link: pathname === "/" ? "#key-dates" : "/ADSN-2024/#key-dates",
    },
    {
      name: "Program",
      link: "/ADSN-2024/program",
    },
    {
      name: "Committees",
      link: "/ADSN-2024/committees",
    },
    {
      name: "Speakers",
      link: "/ADSN-2024/speakers",
    },
    {
      name: "Attend",
      link: "#",
      subtabs: [
        // { name: "Registration", link: "https://www.eventbrite.com.au/e/australian-data-science-network-conference-2024-tickets-967171274317" },
        { name: "Locations", link: "/ADSN-2024/locations" },
        { name: "Accommodation", link: "/ADSN-2024/accommodation" },
      ],
    },
    {
      name: "Sponsor Us",
      link: "/ADSN-2024/sponsorship",
    },
    {
      name: "Contact",
      link: "mailto:adsn2024@curtin.edu.au",
    },
  ];

  const handleTabClick = (name: string) => {
    setActiveTab((prev) => (prev === name ? null : name));
  };

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-blue-navbar md:py-1"
      isBordered
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand className="sm:hidden p-1.5">
          <Link href="/ADSN-2024/">
            <Image
              src="/ADSN-2024/ADSN_Logo_Text_Only.png"
              alt="ADSN Logo"
              width="0"
              height="0"
              className="min-w-[75px] h-[35px]"
              priority
            />
          </Link>
        </NavbarBrand>
        <NavbarBrand className="hidden sm:block">
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
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-y-4 gap-x-10"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={index} className="relative">
            {item.subtabs ? (
              <div className="relative group">
                <button
                  onClick={() => handleTabClick(item.name)}
                  className={`text-white font-extrabold focus:outline-none ${activeTab === item.name ? "underline" : ""
                    }`}
                >
                  {item.name}
                </button>
                {activeTab === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-all ease-in-out duration-300 opacity-100">
                    {item.subtabs.map((subtab, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subtab.link}
                        className="block px-4 py-2 text-blue-navbar hover:bg-gray-100"
                      >
                        {subtab.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                color="foreground"
                className={`text-white font-extrabold ${pathname === item.link ? "underline" : ""
                  }`}
                href={item.link}
              >
                {item.name}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AdsnButton
            text="Check Photos"
            url="https://drive.google.com/drive/folders/1hksy4Uy0LAQseDEXzuguwyqn9wJDw-gj"
          />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="text-blue-navbar font-extrabold">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            {item.subtabs ? (
              <div className="relative group">
                <button
                  onClick={() => handleTabClick(item.name)}
                  className={`text-blue-navbar font-extrabold focus:outline-none ${activeTab === item.name ? "underline" : ""
                    }`}
                >
                  {item.name}
                </button>
                {activeTab === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 transition-all ease-in-out duration-300 opacity-100">
                    {item.subtabs.map((subtab, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subtab.link}
                        className="block px-4 py-2 text-blue-navbar hover:bg-gray-100"
                      >
                        {subtab.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                color="foreground"
                className={`text-blue-navbar font-extrabold ${pathname === item.link ? "underline" : ""
                  }`}
                href={item.link}
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
