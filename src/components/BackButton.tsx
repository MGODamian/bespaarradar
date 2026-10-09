"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  function handleBack() {
    const savedResult = sessionStorage.getItem("bespaarradar-result");

    if (savedResult) {
      router.push("/");
      return;
    }

    router.push("/");
  }

  return (
    <button
      type="button"
      onClick={handleBack}
      className="text-sm font-semibold text-green-700 hover:underline"
    >
      &larr; Terug naar BespaarRadar
    </button>
  );
}
