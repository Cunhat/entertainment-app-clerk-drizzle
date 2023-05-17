"use client"

import Image from "next/image"
import { SignInButton, SignUpButton } from "@clerk/nextjs"

import { Body } from "@/components/ui/Body"
import { Button } from "@/components/ui/Button"
import { Heading } from "@/components/ui/Heading"

export default function Login() {
  return (
    <main className="flex flex-col items-center h-screen bg-custom-bue-900 gap-[58px] md:gap-20 pt-12 md:pt-20 px-6">
      <Image src={"/logo.svg"} width={32} height={25} alt="logoImg" />
      <div className="p-6 bg-custom-bue-700 rounded-[20px] flex flex-col gap-10 w-full max-w-[400px]">
        <Heading size="lg">Login</Heading>
        <SignInButton redirectUrl="/">
          <Button>Login to your account</Button>
        </SignInButton>
        <div className="flex gap-2 justify-center">
          <Body size="sm">Don&apos;t have an account?</Body>
          <SignUpButton redirectUrl="/">
            <Body size="sm" className="text-custom-red hover:cursor-pointer">
              Sign up
            </Body>
          </SignUpButton>
        </div>
      </div>
    </main>
  )
}
