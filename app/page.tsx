import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 bg-[#fbfcf7]">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-[#fbfcf7] sm:items-start">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={700}
          height={700}
          priority
        />
        <div className="flex flex-col items-center gap-6">
          <h1 className="${sourceSans.variable} text-[#960404] text-3xl">
            COMING SOON
          </h1>
        </div>
      </main>
    </div>
  );
}
