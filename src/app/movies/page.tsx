import React from "react"
import { StreamItem as StreamItemType, getMovies } from "@/db/db"

import { Movie } from "@/components/movie"

export default async function Movies() {
  const streamItems = await getMovies()

  return <Movie streamItems={streamItems} />
}
