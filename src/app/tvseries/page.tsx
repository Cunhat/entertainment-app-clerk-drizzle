import React from "react"
import { StreamItem as StreamItemType, getTvSeries } from "@/db/db"

import { StreamCategories } from "@/components/streamCategories"

export default async function Movies() {
  const streamItems = await getTvSeries()

  return <StreamCategories streamItems={streamItems} title="TV Series" />
}
