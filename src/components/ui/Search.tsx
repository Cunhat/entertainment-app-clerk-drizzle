import React from "react";
import Image from "next/image";

export const Search = () => {
  return (
    <div className="flex gap-6 w-[500px]">
      <div>
        <Image
          src={"/svg/icon-search.svg"}
          className="block"
          alt="search"
          width={32}
          height={32}
        />
      </div>
      <input
        type="text"
        placeholder="Search for movies or TV series"
        className="w-full caret-custom-red pb-5 bg-transparent focus:border-b-[1px]  focus:border-b-custom-bue-200 outline-none focus:outline-none  focus:ring-0  text-white font-light text-2xl"
      />
    </div>
  );
};
