"use client";
import React, { useState } from "react";
import Image from "next/image";

type Props = {};

export const Thumbnail: React.FC<Props> = ({}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-full h-full rounded-lg relative"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <Image
        width={0}
        height={0}
        className="w-full h-auto rounded-lg"
        sizes="100vw"
        src="/large.jpg"
        alt="Thumbnail"
      />
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-r from-[#00000080] to-[#00000080] z-10">
          <Image
            src={"/play.png"}
            alt="Thumbnail"
            width={117}
            height={48}
            className="hover:cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};
