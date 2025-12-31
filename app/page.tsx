import Image from "next/image";
import Container from "@/components/containter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fbfcf7] flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
          <Image
            src="/logo.png"
            alt="Company logo"
            width={300}
            height={300}
            priority
          />
          <h1 className="font-ekushey text-[#960404] text-4xl md:text-6xl">
            COMING SOON
          </h1>
        </div>
      </Container>
    </div>
  );
}
