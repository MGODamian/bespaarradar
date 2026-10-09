
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import AbonnementenCheck from "./AbonnementenCheck";
import AbonnementenCalculator from "./AbonnementenCalculator";

export const metadata: Metadata = {
  title: "Abonnementen controleren en besparen | BespaarRadar",
  description:
    "Bekijk je abonnementskosten en ontdek waarop je kunt letten bij streamingdiensten, sportabonnementen en andere terugkerende uitgaven.",
  alternates: {
    canonical: "/vergelijken/abonnementen",
  },
};

const stappen = [
  {
    nummer: "1",
    titel: "Breng je abonnementen in kaart",
    tekst: "Bekijk welke diensten je gebruikt en hoeveel je daar maandelijks voor betaalt.",
  },
  {
    nummer: "2",
    titel: "Controleer wat je gebruikt",
    tekst: "Onderzoek welke abonnementen je regelmatig gebruikt en welke minder belangrijk zijn geworden.",
  },
  {
    nummer: "3",
    titel: "Maak een bewuste keuze",
    tekst: "Bekijk of aanpassen, tijdelijk pauzeren of opzeggen bij jouw situatie past.",
  },
];

const categorieen = [
  {
    titel: "Streaming en entertainment",
    tekst: "Denk aan films, series, muziek, games en andere digitale diensten. Controleer of je meerdere vergelijkbare abonnementen hebt.",
  },
  {
    titel: "Sport en fitness",
    tekst: "Bekijk sportschoolabonnementen, sportapps en andere lidmaatschappen. Controleer hoe vaak je ze daadwerkelijk gebruikt.",
  },
  {
    titel: "Software en online diensten",
    tekst: "Denk aan cloudopslag, apps, software en premiumfuncties. Kijk of je alle betaalde mogelijkheden nodig hebt.",
  },
  {
    titel: "Overige lidmaatschappen",
    tekst: "Controleer ook bezorgdiensten, tijdschriften, verenigingen en andere terugkerende betalingen.",
  },
];

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Controleer je bankafschriften",
    tekst: "Bekijk terugkerende betalingen van de afgelopen maanden. Sommige abonnementen worden jaarlijks of per kwartaal afgeschreven.",
  },
  {
    nummer: "02",
    titel: "Let op dubbele diensten",
    tekst: "Misschien betaal je voor meerdere diensten met vergelijkbare functies. Bepaal welke je echt wilt behouden.",
  },
  {
    nummer: "03",
    titel: "Bekijk je abonnementsvorm",
    tekst: "Controleer of een goedkoper pakket voldoende is. Soms kun je ook overstappen van een jaarabonnement naar een flexibel abonnement, of andersom.",
  },
  {
    nummer: "04",
    titel: "Controleer de opzegvoorwaarden",
    tekst: "Let op de contractduur, opzegtermijn en eventuele gevolgen van opzeggen. Sommige diensten behouden je gegevens niet onbeperkt.",
  },
];

export default function AbonnementenVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f5f9f6] px-4 py-8 text-slate-950 sm:px-6 md:py-14">
      <div className="mx-auto max-w-6xl">
        <BackButton />

        <section className="mt-7 overflow-hidden rounded-[30px] border border-emerald-100 bg-white shadow-sm">
          <div className="relative overflow-hidden bg-slate-950 px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-36 right-40 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />

            <div className="relative">
              <span className="inline-flex rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
                BespaarRadar Abonnementen
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Krijg grip op je abonnementskosten.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Van streamingdiensten tot sportabonnementen:
                ontdek waar je geld naartoe gaat en welke
                terugkerende kosten je opnieuw kunt beoordelen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mijn-abonnementen"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-emerald-300"
                >
                  Bekijk mijn abonnementen
                </a>

                <a
                  href="#bespaartips"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Bespaartips
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-9 sm:px-10 md:px-14 md:py-12">
            <section id="mijn-abonnementen" className="scroll-mt-8">
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Jouw situatie
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Inzicht in je abonnementskosten
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Heb je de BespaarRadar-check ingevuld?
                  Dan gebruiken we je eerder opgegeven
                  gegevens om je abonnementskosten
                  overzichtelijk weer te geven.
                </p>
              </div>

              <AbonnementenCheck />
              <AbonnementenCalculator />
            </section>

            <section className="mt-10 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                Zelf controleren
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                Kleine abonnementen kunnen samen oplopen
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                Een paar losse abonnementen lijken misschien
                niet duur. Maar samen kunnen ze een flink
                deel van je maandelijkse uitgaven vormen.
                Door regelmatig te controleren wat je betaalt,
                kun je bewuster kiezen welke diensten je
                wilt blijven gebruiken.
              </p>

              <p className="mt-4 text-sm font-semibold text-emerald-900">
                BespaarRadar toont geen gegarandeerde besparing.
                Je bepaalt zelf welke abonnementen je
                wilt aanpassen of behouden.
              </p>
            </section>

            <section className="mt-14">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Zo werkt het
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                In drie stappen meer overzicht
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {stappen.map((stap) => (
                  <article
                    key={stap.nummer}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-lg font-black text-emerald-800">
                      {stap.nummer}
                    </div>

                    <h3 className="mt-5 text-lg font-black">
                      {stap.titel}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {stap.tekst}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Categorieën
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Welke abonnementen kun je controleren?
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {categorieen.map((categorie) => (
                  <article
                    key={categorie.titel}
                    className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 sm:p-7"
                  >
                    <h3 className="text-xl font-black text-emerald-900">
                      {categorie.titel}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-700">
                      {categorie.tekst}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="bespaartips"
              className="mt-14 scroll-mt-8"
            >
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Handig om te weten
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Vier manieren om je kosten te controleren
              </h2>

              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {aandachtspunten.map((punt) => (
                  <article
                    key={punt.nummer}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
                  >
                    <span className="text-sm font-black text-emerald-700">
                      {punt.nummer}
                    </span>

                    <h3 className="mt-3 text-xl font-black">
                      {punt.titel}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {punt.tekst}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-[28px] bg-slate-950 p-7 text-white sm:p-9">
              <h2 className="text-2xl font-black tracking-tight">
                Opzeggen is niet altijd de beste keuze
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Sommige abonnementen gebruik je dagelijks
                en zijn hun prijs voor jou waard. Het doel
                is daarom niet om alles op te zeggen,
                maar om inzicht te krijgen in je uitgaven.
                Kijk welke diensten je belangrijk vindt
                en welke kosten je eventueel kunt verminderen.
              </p>
            </section>

            <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-xl font-black">
                  Ook je andere vaste lasten bekijken?
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  Met de BespaarRadar-check krijg je inzicht
                  in energie, internet, mobiel en abonnementen.
                </p>
              </div>

              <Link
                href="/"
                className="shrink-0 rounded-2xl bg-emerald-600 px-6 py-3 text-center font-extrabold text-white transition hover:bg-emerald-700"
              >
                Naar de BespaarRadar-check
              </Link>
            </div>

            <p className="mt-8 text-sm leading-7 text-slate-500">
              BespaarRadar biedt algemene informatie
              over terugkerende kosten. Eventuele
              besparingen hangen af van je persoonlijke
              situatie en de voorwaarden van de aanbieder.
              Er wordt geen gegarandeerde besparing berekend.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
