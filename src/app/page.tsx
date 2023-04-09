import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";

export default function Home() {
  return (
    <main className="flex  flex-col items-center ">
      <Heading className="text-pink-500" size="lg">
        Hello World
      </Heading>
      <Heading className="text-pink-500" size="md">
        Hello World
      </Heading>
      <Heading className="text-pink-500" size="sm">
        Hello World
      </Heading>
      <Heading className="text-pink-500" size="xs">
        Hello World
      </Heading>
      <Body className="text-pink-500" size="md">
        Hello World
      </Body>
      <Body className="text-pink-500" size="sm">
        Hello World
      </Body>
    </main>
  );
}
