import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sim-only vergelijken | Data, prijs en providers",
  description: "Sim-only vergelijken? Ontdek waar je op moet letten bij mobiele data, netwerkdekking, maandprijzen, belminuten en contractvoorwaarden.",
  alternates: {
    canonical: "/vergelijken/sim-only",
  },
};

import BackButton from "@/components/BackButton";

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Hoeveel mobiele data heb je nodig?",
    tekst: "Gebruik je vooral wifi of kijk je onderweg veel video's? Controleer je huidige dataverbruik voordat je een grotere databundel kiest.",
  },
  {
    nummer: "02",
    titel: "Controleer het mobiele netwerk",
    tekst: "Let op de dekking op plekken waar je vaak bent, zoals thuis, op school of op het werk. Bekijk ook of 5G is inbegrepen.",
  },
  {
    nummer: "03",
    titel: "Vergelijk de werkelijke kosten",
    tekst: "Bekijk de maandprijs, tijdelijke kortingen, aansluitkosten en eventuele prijswijzigingen. Een aanbieding is niet altijd gedurende het hele contract even goedkoop.",
  },
  {
    nummer: "04",
    titel: "Let op contract en voorwaarden",
    tekst: "Controleer de contractduur, opzegtermijn, belminuten en hoeveel data je in het buitenland kunt gebruiken.",
  },
];

export default function SimOnlyVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-6 py-10 text-slate-950 md:py-16">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <section className="mt-8 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm">
          <div className="bg-slate-950 px-7 py-12 text-white md:px-12 md:py-16">
            <div className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300">
              BESPAARRADAR MOBIEL
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Sim-only vergelijken zonder verrassingen.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ontdek waarop je moet letten bij het kiezen van een
              mobiel abonnement. Van databundels en netwerken tot
              maandprijzen en contractvoorwaarden.
            </p>
          </div>

          <div className="px-7 py-10 md:px-12">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <div className="text-xs font-black uppercase tracking-widest text-emerald-700">
                STATUS VERGELIJKER
              </div>

              <h2 className="mt-3 text-2xl font-black">
                De sim-onlyvergelijker wordt voorbereid
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                We werken aan de koppeling met een externe vergelijkingspartner.
                Daarom kunnen we hier momenteel nog geen actuele
                sim-onlyaanbiedingen of afsluitmogelijkheden tonen.
              </p>

              <div className="mt-5 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-bold text-emerald-800">
                Binnenkort beschikbaar
              </div>
            </div>

            <div className="mt-12">
              <div className="text-xs font-black uppercase tracking-widest text-emerald-600">
                HANDIG OM TE WETEN
              </div>

              <h2 className="mt-3 text-3xl font-black">
                Vier dingen om op te letten
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {aandachtspunten.map((punt) => (
                  <div
                    key={punt.nummer}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="text-sm font-black text-emerald-600">
                      {punt.nummer}
                    </div>

                    <h3 className="mt-3 text-xl font-black">
                      {punt.titel}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {punt.tekst}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-7 text-white md:p-9">
              <h2 className="text-2xl font-black">
                Waarom sim-only vergelijken?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Een sim-onlyabonnement kan interessant zijn als je al
                een geschikte telefoon hebt. Providers verschillen in
                prijs, databundels, dekking en voorwaarden. Door goed
                te vergelijken, kun je een abonnement kiezen dat
                aansluit op jouw gebruik.
              </p>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500">
              BespaarRadar geeft algemene informatie en geen persoonlijk
              financieel advies. Wanneer de vergelijker beschikbaar is,
              kunnen we een vergoeding ontvangen als je via een partner
              een abonnement afsluit. Dit kost jou niets extra.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
