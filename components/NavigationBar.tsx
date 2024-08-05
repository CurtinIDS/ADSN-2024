import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";
import AdsnButton from "@/components/AdsnButton";

const NavigationBar = () => {
  return (
    <Navbar className="bg-blue-navbar" maxWidth="full">
      <NavbarBrand>
        <Image
          src="/ADSN-2024/ADSN_Logo.png"
          alt="ADSN Logo"
          width="0"
          height="0"
          className="w-auto h-[40px]"
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#key-dates">
            Key Dates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#committees">
            Committees
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            className="text-white"
            href="mailto:uno.fang@curtin.edu.au"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <AdsnButton
            text="Abstract Submission Portal"
            url="https://curtin.au1.qualtrics.com/jfe/form/SV_0Pdhwdfxu0NWJH8"
          />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
