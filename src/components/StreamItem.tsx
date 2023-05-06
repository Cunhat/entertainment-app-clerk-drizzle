import React from "react"

import { ItemTitle } from "./ui/ItemTitle"
import { Thumbnail } from "./ui/Thumbnail"

type StreamProps = {
  type: "movie" | "tvSeries"
  isTrending?: boolean
}

export const StreamItem: React.FC<StreamProps> = ({
  type,
  isTrending = false,
}) => {
  return (
    <div className="flex flex-col min-h-[164px]">
      <Thumbnail type={type} isTrending={isTrending} />
      <ItemTitle type={type} />
    </div>
  )
}
