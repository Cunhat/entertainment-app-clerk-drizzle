import React from "react"
import { StreamItem as StreamItemType, getStreamItems } from "@/db/db"

import { Movie } from "@/components/movie"

export default async function Movies() {
  const streamItems = await getStreamItems()

  return <Movie streamItems={streamItems} />
}
