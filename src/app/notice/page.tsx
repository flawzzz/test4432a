import Link from "next/link";

type Notice = {
  id: string;
  title: string;
  date: string;
  body?: string;
};

const SAMPLE: Notice[] = [
  { id: "1", title: "Welcome to the test site", date: "2025-12-19" },
  { id: "2", title: "Maintenance scheduled", date: "2025-12-25" },
];

export default function Notices() {
  return (
    <div className="mx-auto max-w-3xl py-12 px-6">
      <h2 className="text-2xl font-semibold">Notices</h2>
      <p className="mt-2 text-sm text-zinc-600">Recent announcements for the test project.</p>

      <ul className="mt-6 space-y-4">
        {SAMPLE.map((n) => (
          <li key={n.id} className="rounded border p-4">
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-medium">{n.title}</h3>
              <time className="text-sm text-zinc-500">{n.date}</time>
            </div>
            <p className="mt-2 text-sm text-zinc-700">This is a short summary for the notice.</p>
            <div className="mt-3">
              <Link href="#" className="text-sm text-blue-600 hover:underline">
                Read more
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
