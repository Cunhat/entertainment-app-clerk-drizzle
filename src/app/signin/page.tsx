"use client"

import { SignIn, SignInButton } from "@clerk/nextjs"

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <SignInButton redirectUrl="/" />
    </main>
  )
}
