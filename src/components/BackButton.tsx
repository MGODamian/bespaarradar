"use client";

export default function BackButton() {
  return (
    <button
      type="button"
      onClick={() => window.history.back()}
      className="text-sm font-semibold text-green-700 hover:underline"
    >
      ← Terug naar mijn resultaat
    </button>
  );
}
