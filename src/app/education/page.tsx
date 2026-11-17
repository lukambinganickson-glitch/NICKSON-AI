import Link from "next/link";

export default function ModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/dashboard" className="text-blue-400 hover:underline">
          ← Back to Dashboard
        </Link>

        <h1 className="mt-10 text-3xl font-bold">Education Assistant</h1>
        <p className="mt-4 text-slate-400">Study support, revision notes, explanations and exam preparation.</p>

        <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold">Module status</h2>
          <p className="mt-3 text-slate-400">
            This module is being prepared for NICKSON AI.
            Its interactive features will be connected in the next stages.
          </p>
        </div>
      </div>
    </main>
  );
}
