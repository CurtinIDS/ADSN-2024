import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <Navbar className="bg-blue-navbar" maxWidth="full">
      <NavbarBrand>
        <Image
          src="/ADSN-2024/ADSN_logo.png"
          alt="ADSN Logo"
          width={150}
          height={64}
          priority
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Key Dates
          </Link>
        </NavbarItem>
        {/* <NavbarItem isActive>
    <Link href="#" aria-current="page">
      Key Dates
    </Link>
  </NavbarItem> */}
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Committees
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Get Involved
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Visitors
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-white" href="#">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="#"
            className="bg-green-button text-white font-bold"
            radius="full"
          >
            Register Now
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavigationBar;
