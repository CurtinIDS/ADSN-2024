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
      className="bg-green-button text-white font-bold"
      radius="full"
    >
      {text}
    </Button>
  );
};

export default AdsnButton;
