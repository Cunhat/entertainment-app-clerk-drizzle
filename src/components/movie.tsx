"use client"

import { cp } from "fs"
import React from "react"
import Image from "next/image"
import { StreamItem as StreamItemType, getStreamItems } from "@/db/db"
import { SignIn } from "@clerk/nextjs"
import { useClerk } from "@clerk/nextjs/app-beta/client"

import { StreamItem } from "@/components/StreamItem"
import { Body } from "@/components/ui/Body"
import { Button, ButtonStyles } from "@/components/ui/Button"
import { Heading } from "@/components/ui/Heading"
import { Input } from "@/components/ui/Input"
import { Search } from "@/components/ui/Search"
import { Thumbnail } from "@/components/ui/Thumbnail"

export const Movie: React.FC<{ streamItems: StreamItemType }> = ({
  streamItems,
}) => {
  const [searchValue, setSearchValue] = React.useState("")
  const [filteredMovies, setFilteredMovies] = React.useState(streamItems)

  const searchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    const filterMovie = streamItems.filter((item) =>
      item.stream_item.title
        ?.toLowerCase()
        .includes(e.target.value.toLowerCase())
    )

    setFilteredMovies(filterMovie)
  }

  return (
    <main className="flex w-full h-full flex-col gap-6">
      <Search onChange={searchMovie} />
      <section className="flex-1 pr-4 flex flex-col gap-10 pb-10">
        <Heading size="lg">Movies</Heading>
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
