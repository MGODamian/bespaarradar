
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import InternetCheck from "./InternetCheck";

export const metadata: Metadata = {
  title: "Internet vergelijken | BespaarRadar",
  description:
    "Internet vergelijken? Bekijk je huidige internetkosten en ontdek waar je op moet letten bij snelheid, glasvezel, maandprijzen en overstappen.",
  alternates: {
    canonical: "/vergelijken/internet",
  },
};

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Kies de juiste snelheid",
    tekst: "Niet iedereen heeft het snelste internetpakket nodig. Kijk naar het aantal gebruikers, apparaten en activiteiten zoals streamen, thuiswerken en gamen.",
  },
  {
    nummer: "02",
    titel: "Controleer de beschikbaarheid",
    tekst: "Niet iedere provider of verbinding is beschikbaar op elk adres. Controleer welke mogelijkheden er zijn voor glasvezel, kabel en DSL.",
  },
  {
    nummer: "03",
    titel: "Bereken de totale kosten",
    tekst: "Let op tijdelijke kortingen, de normale maandprijs na de actieperiode en mogelijke kosten voor installatie of apparatuur.",
  },
  {
    nummer: "04",
    titel: "Bekijk de voorwaarden",
    tekst: "Controleer de contractduur, opzegtermijn en eventuele extra diensten. Bekijk ook of je huidige contract nog loopt.",
  },
];

const stappen = [
  {
    nummer: "1",
    titel: "Bekijk je huidige kosten",
    tekst: "Controleer je maandbedrag en welke internetsnelheid je nu hebt.",
  },
  {
    nummer: "2",
    titel: "Bepaal wat je nodig hebt",
    tekst: "Kijk naar je internetgebruik en welke verbindingen op je adres beschikbaar zijn.",
  },
  {
    nummer: "3",
    titel: "Vergelijk de totale prijs",
    tekst: "Let op actieprijzen, de normale maandkosten en contractvoorwaarden.",
  },
];

const snelheden = [
  {
    titel: "Tot 100 Mbit/s",
    omschrijving:
      "Kan voldoende zijn voor een klein huishouden met normaal internetgebruik en streaming.",
  },
  {
    titel: "100 tot 500 Mbit/s",
    omschrijving:
      "Kan prettig zijn bij meerdere gebruikers, thuiswerken en gelijktijdig streamen.",
  },
  {
    titel: "500 Mbit/s of meer",
    omschrijving:
      "Voor huishoudens die veel tegelijk downloaden of extra snelheid willen. Niet voor iedereen noodzakelijk.",
  },
];

export default function InternetVergelijkenPage() {
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
                BespaarRadar Internet
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Internet vergelijken begint bij jouw situatie.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Ontdek wat je nu betaalt en waar je op moet letten
                bij het kiezen van een internetabonnement. Een goede
                vergelijking kijkt verder dan alleen de maandprijs.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mijn-internet"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-emerald-300"
                >
                  Bekijk mijn internetkosten
                </a>

                <a
                  href="#vergelijk-tips"
                  className="rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Vergelijktips
                </a>
              </div>
            </div>
          </div>

          <div className="px-5 py-9 sm:px-10 md:px-14 md:py-12">
            <section id="mijn-internet" className="scroll-mt-8">
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Jouw situatie
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Inzicht in je internetkosten
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Heb je de BespaarRadar-check ingevuld? Dan
                  gebruiken we je eerder opgegeven gegevens om
                  je huidige internetkosten te tonen.
                </p>
              </div>

              <InternetCheck />
            </section>

            <section className="mt-10 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                In ontwikkeling
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                Binnenkort internetaanbiedingen vergelijken
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                We bereiden een koppeling met een externe
                vergelijkingspartner voor. Zodra die beschikbaar
                is, willen we hier actuele internetabonnementen
                kunnen vergelijken.
              </p>

              <p className="mt-4 text-sm font-semibold text-emerald-900">
                Er worden momenteel nog geen live aanbiedingen,
                tarieven of overstapmogelijkheden getoond.
              </p>
            </section>

            <section className="mt-14">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Zo werkt vergelijken
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                In drie stappen voorbereid
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
                Internetsnelheid
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Welke snelheid past bij jou?
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                De juiste snelheid hangt af van je gebruik,
                het aantal apparaten en hoeveel mensen
                tegelijkertijd online zijn. Dit zijn algemene
                richtlijnen, geen harde eisen.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {snelheden.map((snelheid) => (
                  <article
                    key={snelheid.titel}
                    className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6"
                  >
                    <h3 className="text-xl font-black text-emerald-900">
                      {snelheid.titel}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-700">
                      {snelheid.omschrijving}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="vergelijk-tips"
              className="mt-14 scroll-mt-8"
            >
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                Handig om te weten
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Vier dingen om op te letten
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
                Let op de prijs na de kortingsperiode
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Een internetabonnement kan in de eerste maanden
                voordelig lijken door een tijdelijke actie.
                Bekijk daarom de totale kosten over de
                contractperiode, inclusief de normale maandprijs,
                eventuele installatiekosten en extra diensten.
              </p>
            </section>

            <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-xl font-black">
                  Ook je andere vaste lasten bekijken?
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  Met de BespaarRadar-check krijg je inzicht
                  in meerdere maandelijkse kosten.
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
              BespaarRadar biedt algemene informatie en geen
              persoonlijk financieel advies. Wanneer een
              partnervergelijker beschikbaar komt, kunnen
              we een vergoeding ontvangen als je via een
              partner een abonnement afsluit. De voorwaarden
              van de aanbieder zijn altijd leidend.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
