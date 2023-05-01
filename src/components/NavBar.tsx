"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Home } from "@/components/svg/home"

const NavBarItem: React.FC<{ href: string; icon: React.ReactElement }> = ({
  href,
  icon,
}) => {
  const router = usePathname()

  return (
    <Link href={href}>
      <div
        className={`${
          router === href ? "fill-white" : "fill-[#5A698F]"
        } hover:fill-white`}
      >
        {icon}
      </div>
    </Link>
  )
}

export const NavBar = () => {
  return (
    <div className="bg-custom-bue-700 p-4 md:p-6 lg:p-0 lg:py-8 md:rounded-[10px] flex box-border md:box-border items-center lg:flex-col lg:h-full lg:gap-20">
      <Image
        src="/logo.svg"
        width={0}
        height={0}
        sizes="100vw"
        className="h-5 w-6 md:h-8 md:w-8"
        alt="logoMainPage"
      />
      <div className="flex gap-6 md:gap-8 lg:gap-10 ml-auto lg:ml-0 lg:flex-col items-center">
        <NavBarItem
          href={"/"}
          icon={<Home className="h-4 w-4 md:h-5 md:w-5" />}
        />
        <Image
          src="/svg/icon-nav-home.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-4 w-4 md:h-5 md:w-5"
          alt="logoMainPage"
        />
        <Image
          src="/svg/icon-nav-movies.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-4 w-4 md:h-5 md:w-5"
          alt="logoMainPage"
        />
        <Image
          src="/svg/icon-nav-tv-series.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-4 w-4 md:h-5 md:w-5"
          alt="logoMainPage"
        />
        <Image
          src="/svg/icon-nav-bookmark.svg"
          width={0}
          height={0}
          sizes="100vw"
          className="h-4 w-4 md:h-5 md:w-5"
          alt="logoMainPage"
        />
      </div>
      <Image
        src="/image-avatar.png"
        width={0}
        height={0}
        sizes="100vw"
        className="h-6 w-6 md:h-8 md:w-8 ml-auto lg:ml-0 lg:mt-auto"
        alt="logoMainPage"
      />
    </div>
  )
}
