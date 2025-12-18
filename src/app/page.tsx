import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[60vh] bg-transparent">
      <section className="mx-auto max-w-3xl py-20 px-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Test Site</h1>
        <p className="mt-4 text-lg text-zinc-600">
          This is a small test project. Use the navigation to view notices or send
          an inquiry.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/notice"
            className="rounded-md bg-foreground px-4 py-2 text-background"
          >
            Notices
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-4 py-2 hover:bg-black/5"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
