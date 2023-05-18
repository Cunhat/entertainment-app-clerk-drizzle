"use client"

import React from "react"
import { StreamItem as StreamItemType, getStreamItems } from "@/db/db"

import { StreamItem } from "@/components/StreamItem"
import { Heading } from "@/components/ui/Heading"
import { Search } from "@/components/ui/Search"

export const StreamCategories: React.FC<{
  streamItems: StreamItemType
  title: string
}> = ({ streamItems, title }) => {
  const [filteredMovies, setFilteredMovies] = React.useState(streamItems)
  const [text, setText] = React.useState(title)

  const searchItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterMovie = streamItems.filter((item) =>
      item.stream_item.title
        ?.toLowerCase()
        .includes(e.target.value.toLowerCase())
    )
    if (e.target.value === "") setText(title)
    else
      setText(
        `Found ${filterMovie.length} ${
          filterMovie.length === 1 ? "result" : "results"
        } for "${e.target.value}"`
      )
    setFilteredMovies(filterMovie)
  }

  return (
    <main className="flex w-full h-full flex-col gap-6">
      <Search onChange={searchItems} />
      <section className="flex-1 pr-4 flex flex-col gap-10 pb-10">
        <Heading size="lg">{text}</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll ">
          {filteredMovies.map((item) => (
            <StreamItem
              key={item.stream_item.id}
              type={item.category?.name as "movie" | "tvSeries"}
              rating={item?.rating?.name!}
              year={item.stream_item.year!}
              title={item.stream_item.title!}
              thumbnailUrl={item.stream_item.thumbnailUrl!}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
