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

const TrendingItem: React.FC<{
  type: "movie" | "tvSeries"
  year: number
  rating: string
  title: string
  thumbnailUrl: string
}> = ({ type, rating, year, title, thumbnailUrl }) => {
  return (
    <div className="min-h-[140px] min-w-[240px] md:min-w-[470px] md:min-h-[230px] flex-[0_0_auto] ">
      <Thumbnail
        type={type}
        isTrending
        year={year}
        rating={rating}
        title={title}
        thumbnailUrl={thumbnailUrl}
      />
    </div>
  )
}

const Trending: React.FC<{ values: Array<StreamItemType> }> = ({ values }) => {
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-4 ">
      {values?.map((item) => (
        <TrendingItem
          key={item.stream_item.id}
          type={item.category?.name as "movie" | "tvSeries"}
          rating={item?.rating?.name!}
          year={item.stream_item.year!}
          title={item.stream_item.title!}
          thumbnailUrl={item.stream_item.thumbnailUrl!}
        />
      ))}
    </div>
  )
}

export default async function Home() {
  const streamItems = await getStreamItems()

  console.log(streamItems)

  return (
    <main className="flex w-full h-full flex-col gap-6 ">
      <Search />
      <section className="flex flex-col">
        <Heading size="lg">Trending</Heading>

        <Trending
          values={streamItems.filter((item) => item.stream_item.isTrending)}
        />
      </section>
      <section className="flex-1 pr-4">
        <Heading size="lg">Recommended for you</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll ">
          {streamItems.map((item) => (
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
