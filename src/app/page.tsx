import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { Body } from "@/components/ui/Body";
import { Button, ButtonStyles } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search } from "@/components/ui/Search";

export default function Home() {
  return (
    <main className="flex  flex-col items-center ">
      <Heading className="text-custom-red" size="lg">
        Hello World
      </Heading>
      <Heading className="text-custom-red" size="md">
        Hello World
      </Heading>
      <Heading className="text-custom-red" size="sm">
        Hello World
      </Heading>
      <Heading className="text-custom-red" size="xs">
        Hello World
      </Heading>
      <Body className="text-custom-red" size="md">
        Hello World
      </Body>
      <Body className="text-custom-red" size="sm">
        Hello World
      </Body>
      <Button>Login to your account</Button>
      <button className={ButtonStyles()}>Teste</button>
      <Input placeholder="Email address" />
      <Search />
    </main>
  );
}
