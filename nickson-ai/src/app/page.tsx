"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function sendMessage() {
    if (!message.trim()) return;
    setMessages([...messages, message]);
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="flex justify-between border-b border-slate-800 p-5">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            NICKSON AI
          </h1>
          <p className="text-sm text-slate-400">
            Your Personal Intelligent Assistant
          </p>
        </div>
        <span className="text-green-400 text-xs">● ONLINE</span>
      </header>

      <section className="mx-auto max-w-3xl px-5 py-16">
        <div className="mb-12 text-center">
          <div className="text-6xl text-cyan-400">✦</div>
          <h2 className="mt-5 text-3xl font-bold">
            Welcome to NICKSON AI
          </h2>
          <p className="mt-4 text-slate-400">
            Think smarter. Work faster. Achieve more.
          </p>
        </div>

        <div className="mb-6 space-y-4">
          {messages.map((item, index) => (
            <div key={index} className="rounded-xl bg-slate-800 p-4">
              <p className="mb-2 text-xs text-cyan-400">YOU</p>
              {item}
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask NICKSON AI anything..."
            className="w-full resize-none bg-transparent p-3 outline-none"
            rows={3}
          />
          <button
            onClick={sendMessage}
            className="rounded-xl bg-cyan-400 px-7 py-3 font-bold text-black"
          >
            Send ↑
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          NICKSON AI 1.0 • Personal AI Assistant
        </p>
      </section>
    </main>
  );
}
