
import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import MobielOverzicht from "./MobielOverzicht";

export const metadata: Metadata = {
  title: "Sim-only vergelijken | BespaarRadar",
  description:
    "Sim-only vergelijken? Bekijk je huidige mobiele kosten en ontdek waar je op moet letten bij databundels, 5G, netwerkdekking en contractvoorwaarden.",
  alternates: {
    canonical: "/vergelijken/sim-only",
  },
};

const stappen = [
  {
    nummer: "1",
    titel: "Bekijk je mobiele kosten",
    tekst: "Controleer je maandbedrag, databundel en hoeveel mobiele data je daadwerkelijk gebruikt.",
  },
  {
    nummer: "2",
    titel: "Bepaal wat je nodig hebt",
    tekst: "Kies een passende hoeveelheid data, belminuten en een netwerk met goede dekking.",
  },
  {
    nummer: "3",
    titel: "Vergelijk de voorwaarden",
    tekst: "Let op de totale contractkosten, tijdelijke kortingen en eventuele aansluitkosten.",
  },
];

const databundels = [
  {
    titel: "Kleine databundel",
    subtitel: "Tot ongeveer 5 GB",
    tekst: "Kan voldoende zijn als je meestal wifi gebruikt en onderweg vooral berichten verstuurt of af en toe iets opzoekt.",
  },
  {
    titel: "Gemiddelde databundel",
    subtitel: "Ongeveer 5 tot 20 GB",
    tekst: "Kan passen bij regelmatig socialmediagebruik, muziek luisteren en af en toe video's kijken zonder wifi.",
  },
  {
    titel: "Grote databundel",
    subtitel: "Meer dan 20 GB",
    tekst: "Interessant als je vaak onderweg streamt, veel mobiele data gebruikt of regelmatig je hotspot aanzet.",
  },
];

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Hoeveel data gebruik je?",
    tekst: "Controleer je werkelijke dataverbruik in de app van je huidige provider. Een grotere bundel is niet automatisch een betere keuze.",
  },
  {
    nummer: "02",
    titel: "Netwerkdekking en 5G",
    tekst: "Controleer de dekking op plekken waar je vaak bent. Bekijk of 5G inbegrepen is en welke snelheidsbeperkingen gelden.",
  },
  {
    nummer: "03",
    titel: "De totale abonnementskosten",
    tekst: "Vergelijk niet alleen de actieprijs. Kijk ook naar de reguliere maandprijs, aansluitkosten en mogelijke jaarlijkse prijsaanpassingen.",
  },
  {
    nummer: "04",
    titel: "Contractduur en buitenland",
    tekst: "Controleer de looptijd, opzegvoorwaarden, belminuten en hoeveel data je binnen de EU kunt gebruiken.",
  },
];

export default function SimOnlyVergelijkenPage() {
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
                BespaarRadar Mobiel
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Sim-only vergelijken zonder verrassingen.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Ontdek wat je nu betaalt en welke databundel
                bij je past. Vergelijk straks niet alleen de
                maandprijs, maar ook het netwerk, de snelheid
                en de contractvoorwaarden.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mijn-mobiel"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-emerald-300"
                >
                  Bekijk mijn mobiele kosten
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
            <section id="mijn-mobiel" className="scroll-mt-8">
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Jouw situatie
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Inzicht in je mobiele kosten
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Heb je de BespaarRadar-check ingevuld?
                  Dan gebruiken we je eerder opgegeven
                  gegevens om je huidige mobiele kosten
                  te laten zien.
                </p>
              </div>

              <MobielOverzicht />
            </section>

            <section className="mt-10 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <span className="inline-flex rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                In ontwikkeling
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                Binnenkort sim-onlyaanbiedingen vergelijken
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                We bereiden een koppeling met een externe
                vergelijkingspartner voor. Zodra die beschikbaar
                is, willen we hier actuele sim-onlyabonnementen
                kunnen vergelijken.
              </p>

              <p className="mt-4 text-sm font-semibold text-emerald-900">
                Momenteel tonen we nog geen live aanbiedingen,
                tarieven of mogelijkheden om een abonnement
                af te sluiten.
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
                Mobiele data
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                Welke databundel past bij jou?
              </h2>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                De juiste bundel hangt af van je gebruik
                buiten wifi. Onderstaande categorieën zijn
                algemene richtlijnen.
              </p>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {databundels.map((bundel) => (
                  <article
                    key={bundel.titel}
                    className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6"
                  >
                    <h3 className="text-xl font-black text-emerald-900">
                      {bundel.titel}
                    </h3>

                    <p className="mt-2 text-sm font-bold text-emerald-700">
                      {bundel.subtitel}
                    </p>

                    <p className="mt-4 leading-7 text-slate-700">
                      {bundel.tekst}
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
                Onbeperkt data is niet altijd onbeperkt
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Bij abonnementen met onbeperkte data kunnen
                voorwaarden gelden, zoals een dagelijkse
                bundel, een fair-usebeleid of een aparte
                datalimiet binnen de EU. Controleer daarom
                altijd de voorwaarden van de provider.
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
