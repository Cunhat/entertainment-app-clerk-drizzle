import React from "react";
import Image from "next/image";
import Thumb from "public/svg/thumb.svg";

type Props = {};

export const Thumbnail: React.FC<Props> = ({}) => {
  return (
    <div className="w-full h-full rounded-lg hover:bg-thumbnail">
      <Image
        width={0}
        height={0}
        className="w-full h-auto rounded-lg"
        sizes="100vw"
        src="/large.jpg"
        alt="Thumbnail"
      />
      <div></div>
    </div>
  );
};
