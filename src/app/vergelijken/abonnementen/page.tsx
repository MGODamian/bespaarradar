
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import AbonnementenCheck from "./AbonnementenCheck";
import AbonnementenCalculator from "./AbonnementenCalculator";

export const metadata: Metadata = {
  title: "Abonnementen besparen en kosten berekenen | BespaarRadar",
  description:
    "Bereken eenvoudig je abonnementskosten per maand en jaar. Ontdek hoeveel je mogelijk kunt besparen door abonnementen aan te passen of stop te zetten.",
  alternates: {
    canonical: "/vergelijken/abonnementen",
  },
};

export default function AbonnementenVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f5f8f6] px-4 py-6 text-slate-950 sm:px-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <header className="mt-6 rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10">
          <div className="mb-4 inline-flex rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-extrabold text-emerald-300">
            GRATIS ABONNEMENTENCHECK
          </div>

          <h1 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Hoeveel kun jij besparen op abonnementen?
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Vul je abonnementen en maandbedragen in. Bekijk direct
            wat je betaalt en hoeveel je mogelijk kunt besparen.
          </p>
        </header>

        <div className="mt-5 rounded-3xl border border-slate-200 bg-white px-4 pb-8 pt-1 shadow-sm sm:px-8">
          <AbonnementenCalculator />
        </div>

        <details className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <summary className="cursor-pointer px-6 py-5 font-bold text-slate-900">
            Bekijk mijn eerder geselecteerde abonnementen
          </summary>

          <div className="border-t border-slate-100 px-5 pb-6">
            <AbonnementenCheck />
          </div>
        </details>

        <div className="mt-5 rounded-2xl border border-emerald-100 bg-emerald-50 px-6 py-5">
          <h2 className="font-black text-emerald-950">
            Zo werkt je mogelijke besparing
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            Vink abonnementen aan die je overweegt stop te zetten.
            We tellen de opgegeven maandbedragen bij elkaar op en
            tonen wat je theoretisch kunt besparen. Houd rekening
            met contracten, opzegtermijnen en eventuele extra kosten.
          </p>
        </div>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black">
              Ook besparen op andere vaste lasten?
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Bekijk energie, internet en sim-only met BespaarRadar.
            </p>
          </div>

          <Link
            href="/"
            className="shrink-0 rounded-xl bg-emerald-600 px-5 py-3 text-center text-sm font-extrabold text-white transition hover:bg-emerald-700"
          >
            Bekijk mijn vaste lasten
          </Link>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-500">
          BespaarRadar is een gratis hulpmiddel. De getoonde
          besparing is een rekenvoorbeeld op basis van je eigen
          invoer, geen gegarandeerde aanbieding.
        </p>
      </div>
    </main>
  );
}
