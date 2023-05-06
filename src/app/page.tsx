import Image from "next/image"
import { SignIn } from "@clerk/nextjs"
import { useClerk } from "@clerk/nextjs/app-beta/client"

import { Body } from "@/components/ui/Body"
import { Button, ButtonStyles } from "@/components/ui/Button"
import { Heading } from "@/components/ui/Heading"
import { Input } from "@/components/ui/Input"
import { Search } from "@/components/ui/Search"
import { Thumbnail } from "@/components/ui/Thumbnail"

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col gap-6 ">
      <Search />
      <section className="flex flex-col">
        <Heading size="lg">Trending</Heading>
        <div className="flex flex-nowrap overflow-x-auto gap-4 ">
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
          <div className="bg-pink-200 h-[140px] w-[240px] flex-[0_0_auto] "></div>
        </div>
      </section>
      <section className="flex-1 pr-4">
        <Heading size="lg">Recommended for you</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full max-w-full">
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
          <div className="bg-pink-200 h-full"></div>
        </div>
      </section>
    </main>
  )
}
