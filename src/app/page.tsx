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
    <main className="flex h-full flex-col gap-6 overflow-y-auto ">
      <Search />
      <section>
        <Heading size="lg">Trending</Heading>
        <div className="flex gap-4 overflow-x-auto">
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
          <div className="bg-pink-200 h-[140px] w-[240px]"></div>
        </div>
      </section>
      <section className="flex-1 pr-4">
        <Heading size="lg">Recommended for you</Heading>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
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
