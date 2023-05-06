"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

import { Movies } from "@/components/svg/Movies"
import { Home } from "@/components/svg/home"
import { Bookmarked } from "./svg/Bookmarked"
import { TvSeries } from "./svg/TvSeries"

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

const UserProfileNavbar: React.FC = () => {
  return <UserButton />
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
        <NavBarItem href={"/"} icon={<Home className=" h-5 w-5" />} />
        <NavBarItem href={"/movies"} icon={<Movies className=" h-5 w-5" />} />
        <NavBarItem
          href={"/tvseries"}
          icon={<TvSeries className=" h-5 w-5" />}
        />
        <NavBarItem
          href={"/bookmarked"}
          icon={<Bookmarked className=" h-5 w-5" />}
        />
      </div>
      <div className="h-6 w-6 md:h-8 md:w-8 ml-auto lg:ml-0 lg:mt-auto">
        <UserProfileNavbar />
      </div>
    </div>
  )
}
