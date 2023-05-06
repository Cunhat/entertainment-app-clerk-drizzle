"use client"

import React, { useState } from "react"
import Image from "next/image"

import { ItemTitle } from "./ItemTitle"

type Props = { isTrending?: boolean; type: "movie" | "tvSeries" }

export const Thumbnail: React.FC<Props> = ({ isTrending, type }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="w-full h-full rounded-lg relative bg-[url('/large.jpg')] bg-cover bg-center flex"
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      {isTrending && (
        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
          <ItemTitle type={type!} />
        </div>
      )}
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
  )
}
