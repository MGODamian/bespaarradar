import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internet vergelijken | Snelheid en abonnementen",
  description: "Internet vergelijken? Ontdek waar je op moet letten bij internetsnelheid, glasvezel, beschikbaarheid, abonnementskosten en contractvoorwaarden.",
  alternates: {
    canonical: "/vergelijken/internet",
  },
};

import BackButton from "@/components/BackButton";

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Kies de juiste internetsnelheid",
    tekst: "Voor browsen en streamen heb je niet altijd het snelste pakket nodig. Kijk naar het aantal gebruikers, apparaten en hoe je internet gebruikt.",
  },
  {
    nummer: "02",
    titel: "Controleer je adres",
    tekst: "Niet elke provider of verbinding is op ieder adres beschikbaar. Glasvezel, kabel en DSL kunnen verschillende mogelijkheden bieden.",
  },
  {
    nummer: "03",
    titel: "Bekijk de totale kosten",
    tekst: "Let op tijdelijke welkomstkortingen, de prijs na de actieperiode en eventuele installatie- of apparatuurkosten.",
  },
  {
    nummer: "04",
    titel: "Controleer je contract",
    tekst: "Bekijk wanneer je huidige contract afloopt en of je zonder extra kosten kunt overstappen. Vergelijk ook wat er in het pakket zit.",
  },
];

export default function InternetVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-6 py-10 text-slate-950 md:py-16">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <section className="mt-8 overflow-hidden rounded-[32px] border border-emerald-100 bg-white shadow-sm">
          <div className="bg-slate-950 px-7 py-12 text-white md:px-12 md:py-16">
            <div className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-xs font-black uppercase tracking-widest text-emerald-300">
              BESPAARRADAR INTERNET
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
              Internet vergelijken begint bij jouw situatie.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Ontdek welke punten belangrijk zijn bij het kiezen van
              een internetabonnement. Vergelijk straks niet alleen
              de prijs, maar ook snelheid, beschikbaarheid en voorwaarden.
            </p>
          </div>

          <div className="px-7 py-10 md:px-12">
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <div className="text-xs font-black uppercase tracking-widest text-emerald-700">
                STATUS VERGELIJKER
              </div>

              <h2 className="mt-3 text-2xl font-black">
                De internetvergelijker wordt voorbereid
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                We werken aan de koppeling met een externe vergelijkingspartner.
                Daarom kunnen we hier momenteel nog geen actuele
                internetaanbiedingen of overstapmogelijkheden tonen.
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
                Waarom internet vergelijken?
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Internetabonnementen verschillen in snelheid, prijs,
                contractduur en aanvullende diensten. Een goedkoper
                abonnement is niet altijd de beste keuze. Door goed
                te vergelijken, kun je een pakket vinden dat aansluit
                op jouw gebruik en wensen.
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
