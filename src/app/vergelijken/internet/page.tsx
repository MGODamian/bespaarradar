
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import InternetCheck from "./InternetCheck";

export const metadata: Metadata = {
  title: "Internetkosten bekijken en vergelijken | BespaarRadar",
  description:
    "Bekijk je internetkosten en ontdek waarop je moet letten bij internetsnelheid, maandprijzen, contractduur en overstappen.",
  alternates: {
    canonical: "/vergelijken/internet",
  },
};

export default function InternetVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f5f8f6] px-4 py-6 text-slate-950 sm:px-6 md:py-10">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <header className="mt-6 rounded-3xl bg-slate-950 px-6 py-8 text-white shadow-sm sm:px-10 sm:py-10">
          <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-extrabold text-emerald-300">
            GRATIS INTERNETCHECK
          </span>

          <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
            Hoeveel betaal jij voor internet?
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            Bekijk je huidige internetkosten en ontdek
            waar je op kunt letten bij een nieuw abonnement.
          </p>
        </header>

        <section className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-5">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
              Jouw internetkosten
            </span>

            <h2 className="mt-2 text-2xl font-black tracking-tight">
              Je persoonlijke overzicht
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              We tonen hier de internetgegevens die je eerder
              hebt ingevuld bij de BespaarRadar-check.
            </p>
          </div>

          <InternetCheck />
        </section>

        <section className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-emerald-800">
            BINNENKORT BESCHIKBAAR
          </span>

          <h2 className="mt-3 text-xl font-black">
            Internetaanbiedingen vergelijken
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            We werken aan een koppeling met een vergelijkingspartner.
            Zodra deze beschikbaar is, willen we hier actuele
            internetabonnementen tonen. Er zijn momenteel nog
            geen live aanbiedingen beschikbaar.
          </p>
        </section>

        <details className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <summary className="cursor-pointer px-6 py-5 font-bold">
            Waar moet ik op letten bij internet vergelijken?
          </summary>

          <div className="border-t border-slate-100 px-6 py-5 text-sm leading-7 text-slate-700">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Kies een internetsnelheid die bij je gebruik past.
              </li>
              <li>
                Controleer of glasvezel, kabel of DSL
                beschikbaar is op je adres.
              </li>
              <li>
                Bekijk de maandprijs na een eventuele kortingsperiode.
              </li>
              <li>
                Let op contractduur, installatiekosten
                en opzegvoorwaarden.
              </li>
            </ul>
          </div>
        </details>

        <div className="mt-5 flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-black">
              Ook je andere vaste lasten bekijken?
            </h2>

            <p className="mt-1 text-sm text-slate-600">
              Controleer ook energie, mobiel en abonnementen.
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
          BespaarRadar geeft inzicht in je opgegeven kosten.
          Er wordt momenteel geen daadwerkelijke besparing
          op internetabonnementen berekend. Eventuele toekomstige
          partnerlinks kunnen een vergoeding opleveren.
        </p>
      </div>
    </main>
  );
}
