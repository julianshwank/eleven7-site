"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] =
    useState<"idle" | "loading" | "ok" | "error">("idle");

  // Your production Apps Script endpoint
  const ENDPOINT =
    "https://script.google.com/macros/s/AKfycbzviKB_gwegiIdSW8GFvBnoafmJ-xmZ-6xk8TiNRoaB3iT03MHrUlyjCniAK28ZCq5UQg/exec";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/.+@.+\..+/.test(email)) return setStatus("error");
    setStatus("loading");

    try {
      // Send as GET to avoid preflight / content-type issues
      const url =
        ENDPOINT +
        `?email=${encodeURIComponent(email)}` +
        `&ua=${encodeURIComponent(navigator.userAgent)}` +
        `&page=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}` +
        `&t=${Date.now()}`;

      const res = await fetch(url, { method: "GET" });

      // Try JSON first; fall back to text "Success"
      let ok = false;
      const ct = res.headers.get("content-type") || "";
      if (ct.includes("application/json")) {
        const json = await res.json().catch(() => null);
        ok = !!json?.ok;
      } else {
        const text = await res.text().catch(() => "");
        ok = /success/i.test(text);
      }

      if (res.ok && ok) {
        setStatus("ok");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Subscribe error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="w-full mt-16">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-lg font-medium mb-2">Join the Eleven-7 newsletter</h3>
        <p className="text-sm text-gray-400 mb-4">
          Get new loop packs, drops, and cook-ups in your inbox.
        </p>

        <form onSubmit={onSubmit} className="flex gap-2 items-center justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full max-w-sm bg-black text-white placeholder-gray-500 border border-white/40 rounded px-3 py-2 outline-none focus:border-white transition"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="whitespace-nowrap border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition disabled:opacity-50"
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </button>
        </form>

        {status === "ok" && (
          <p className="text-emerald-400 text-sm mt-3">Thanks! You’re in.</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm mt-3">Couldn’t subscribe. Try again?</p>
        )}
      </div>
    </div>
  );
}
