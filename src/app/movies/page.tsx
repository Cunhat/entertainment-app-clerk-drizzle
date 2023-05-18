import React from "react"
import { StreamItem as StreamItemType, getMovies } from "@/db/db"

import { StreamCategories } from "@/components/streamCategories"

export default async function Movies() {
  const streamItems = await getMovies()

  return <StreamCategories streamItems={streamItems} title="Movies" />
}
