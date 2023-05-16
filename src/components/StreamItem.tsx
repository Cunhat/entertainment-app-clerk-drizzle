import React from "react"

import { ItemTitle } from "./ui/ItemTitle"
import { Thumbnail } from "./ui/Thumbnail"

type StreamProps = {
  type: "movie" | "tvSeries"
  isTrending?: boolean
  year: number
  rating: string
  title: string
  thumbnailUrl: string
}

export const StreamItem: React.FC<StreamProps> = ({
  type,
  isTrending = false,
  year,
  rating,
  title,
  thumbnailUrl,
}) => {
  return (
    <div className="flex flex-col min-h-[164px] md:min-h-[220px] max-h-[328px]">
      <Thumbnail
        type={type}
        isTrending={isTrending}
        thumbnailUrl={thumbnailUrl}
        rating={rating}
        year={year}
        title={title}
      />
      <ItemTitle type={type} year={year} rating={rating} title={title} />
    </div>
  )
}
