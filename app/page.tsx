import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-zinc-50 font-sans bg-stone-50">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-stone-50 sm:items-start">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={500}
          height={500}
          priority
        />
        <div className="flex flex-col items-center gap-6">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            Coming Soon
          </h1>
        </div>
      </main>
    </div>
  );
}
