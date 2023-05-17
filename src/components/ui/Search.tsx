import React from "react"
import Image from "next/image"

export const Search: React.FC<{
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}> = ({ onChange }) => {
  return (
    <div className="flex gap-4 md:gap-6 w-full pr-4">
      <div>
        <Image
          src={"/svg/icon-search.svg"}
          alt="search"
          width={0}
          height={0}
          sizes="100vw"
          className="h-6 w-6 md:h-8 md:w-8"
        />
      </div>
      <input
        type="text"
        onChange={(e) => onChange(e)}
        placeholder="Search for movies or TV series"
        className="w-full caret-custom-red pb-5 bg-transparent focus:border-b-[1px]  focus:border-b-custom-bue-200 outline-none focus:outline-none  focus:ring-0  text-white font-light text-base md:text-2xl "
      />
    </div>
  )
}
