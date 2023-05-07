import Image from "next/image"
import { getUsers } from "@/db/db"
import { SignIn } from "@clerk/nextjs"
import { useClerk } from "@clerk/nextjs/app-beta/client"

import { StreamItem } from "@/components/StreamItem"
import { Body } from "@/components/ui/Body"
import { Button, ButtonStyles } from "@/components/ui/Button"
import { Heading } from "@/components/ui/Heading"
import { Input } from "@/components/ui/Input"
import { Search } from "@/components/ui/Search"
import { Thumbnail } from "@/components/ui/Thumbnail"

const TrendingItem: React.FC<{ type: "movie" | "tvSeries" }> = ({ type }) => {
  return (
    <div className="min-h-[140px] min-w-[240px] md:min-w-[470px] md:min-h-[230px] flex-[0_0_auto] ">
      <Thumbnail type={type} isTrending />
    </div>
  )
}

const Trending: React.FC = () => {
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-4 ">
      <TrendingItem type="movie" />
      <TrendingItem type="tvSeries" />
      <TrendingItem type="tvSeries" />
      <TrendingItem type="movie" />
      <TrendingItem type="tvSeries" />
      <TrendingItem type="movie" />
      <TrendingItem type="tvSeries" />
    </div>
  )
}

export default async function Home() {
  const teste = await getUsers()
  return (
    <main className="flex w-full h-full flex-col gap-6 ">
      <Search />
      <section className="flex flex-col">
        <Heading size="lg">Trending</Heading>
        <Trending />
      </section>
      <section className="flex-1 pr-4">
        <Heading size="lg">Recommended for you</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll ">
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
          <StreamItem type="movie" />
        </div>
      </section>
    </main>
  )
}
