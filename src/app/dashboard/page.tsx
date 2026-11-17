import Link from "next/link";
import { NICKSON_AI } from "@/lib/nickson-ai";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10">
          <p className="text-sm font-semibold tracking-widest text-blue-400">
            PERSONAL AI PLATFORM
          </p>
          <h1 className="mt-3 text-4xl font-bold">
            {NICKSON_AI.name}
          </h1>
          <p className="mt-2 text-slate-400">
            Welcome to your personal intelligent workspace, {NICKSON_AI.owner}.
          </p>
        </header>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {NICKSON_AI.modules.map((module) => (
            <Link
              key={module.name}
              href={module.path}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <h2 className="text-xl font-semibold text-blue-300">
                {module.name}
              </h2>
              <p className="mt-3 text-sm text-slate-400">
                {module.description}
              </p>
              <p className="mt-5 text-sm font-semibold text-white">
                Open module →
              </p>
            </Link>
          ))}
        </section>

        <footer className="mt-12 border-t border-slate-800 pt-5 text-sm text-slate-500">
          NICKSON AI v{NICKSON_AI.version} · Your personal AI workspace
        </footer>
      </div>
    </main>
  );
}
