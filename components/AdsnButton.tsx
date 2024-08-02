import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

interface AdsnButtonProps {
  text: string;
}

const AdsnButton: React.FC<AdsnButtonProps> = ({ text }) => {
  return (
    <Button
      as={Link}
      href="#"
      className="bg-green-button text-white text-center font-bold text-xl py-6 px-6"
      radius="full"
    >
      {text}
    </Button>
  );
};

export default AdsnButton;
