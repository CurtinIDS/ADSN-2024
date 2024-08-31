import React from "react";
import Image from "next/image";

export interface CommitteeProps {
  name: string;
  role: string;
  profile_picture_path?: string;
  biography_url?: string;
}

const CommitteesProfile: React.FC<CommitteeProps> = ({
  name,
  role,
  profile_picture_path = "placeholder.png",
  biography_url = "https://curtinids.github.io/ADSN-2024/",
}) => {
  // Split the role string by \n and store it as an array
  const roleLines = role.split('\n');

  return (
    <div className="p-3 items-center justify-center text-center bg-gray-background border rounded-lg text-gray-900 max-w-[200px] w-full mx-auto">
      <a href={`${biography_url}`} rel="noopener noreferrer" target="_blank">
        <Image
          src={`/ADSN-2024/profile_pictures/${profile_picture_path}`}
          alt={`${name} Profile picture`}
          className="rounded-lg mx-auto md:pt-3"
          width="150"
          height="150"
        />
      </a>
      <p className="font-bold p-1 md:p-3 text-xl md:text-2xl ">{name}</p>
      <p className="md:p-1 ">
        {roleLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < roleLines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default CommitteesProfile;
