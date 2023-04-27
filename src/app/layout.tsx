import "./globals.css"
import { Outfit } from "next/font/google"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className={`${outfit.className}`}>{children}</main>
      </body>
    </html>
  )
}
