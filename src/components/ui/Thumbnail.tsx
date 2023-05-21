"use client"

import React, { useState } from "react"
import Image from "next/image"

import { Bookmark } from "../svg/Bookmark"
import { ItemTitle } from "./ItemTitle"

type Props = {
  isTrending?: boolean
  type: "movie" | "tvSeries"
  thumbnailUrl: string
  rating: string
  year: number
  title: string
}

export const Thumbnail: React.FC<Props> = ({
  isTrending,
  type,
  thumbnailUrl,
  rating,
  year,
  title,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`w-full h-full rounded-lg relative bg-cover bg-center flex`}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
    >
      <Image
        src={thumbnailUrl}
        alt="Thumbnail"
        layout="fill"
        className="rounded-lg"
      />
      <div className="absolute top-2 right-2 bg-gradient-to-r from-[#00000080] to-[#00000080] z-20 h-8 w-8 rounded-full flex justify-center items-center hover:cursor-pointer hover:fill-white fill-none">
        <Bookmark className="fill-inherit" />
      </div>
      {isTrending && (
        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
          <ItemTitle type={type!} year={year} rating={rating} title={title} />
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
