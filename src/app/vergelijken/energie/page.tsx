import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/BackButton";
import EnergieCheck from "./EnergieCheck";

export const metadata: Metadata = {
  title: "Energie vergelijken | BespaarRadar",
  description:
    "Energie vergelijken? Bekijk je persoonlijke energiekosten en ontdek waarop je moet letten bij tarieven, contractduur, zonnepanelen en overstappen.",
  alternates: {
    canonical: "/vergelijken/energie",
  },
};

const aandachtspunten = [
  {
    nummer: "01",
    titel: "Je jaarlijkse verbruik",
    tekst: "Bekijk hoeveel stroom (kWh) en gas (m³) je jaarlijks verbruikt. Deze gegevens vind je op je jaarafrekening of in de app van je leverancier.",
  },
  {
    nummer: "02",
    titel: "Het type energiecontract",
    tekst: "Vergelijk vaste, variabele en dynamische contracten. Let op prijszekerheid, contractduur en de manier waarop tarieven veranderen.",
  },
  {
    nummer: "03",
    titel: "De totale jaarkosten",
    tekst: "Kijk verder dan het maandelijkse voorschot. Vergelijk ook vaste leveringskosten, belastingen, kortingen en eventuele terugleverkosten.",
  },
  {
    nummer: "04",
    titel: "Voorwaarden en overstappen",
    tekst: "Controleer wanneer je contract afloopt, of je een opzegvergoeding moet betalen en welke voorwaarden gelden voor zonnepanelen.",
  },
];

const stappen = [
  {
    nummer: "1",
    titel: "Controleer je kosten",
    tekst: "Bekijk wat je nu betaalt en zoek je jaarlijkse energieverbruik op.",
  },
  {
    nummer: "2",
    titel: "Vergelijk de voorwaarden",
    tekst: "Let op de totale jaarkosten, contractvorm en mogelijke extra kosten.",
  },
  {
    nummer: "3",
    titel: "Kies wat bij je past",
    tekst: "Beoordeel niet alleen de prijs, maar ook de zekerheid en flexibiliteit.",
  },
];

export default function EnergieVergelijkenPage() {
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
                BespaarRadar Energie
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Energie vergelijken begint met inzicht.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Krijg overzicht van je huidige energiekosten en ontdek
                waar je op moet letten voordat je een nieuw
                energiecontract afsluit.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mijn-energie"
                  className="rounded-2xl bg-emerald-400 px-6 py-3 font-extrabold text-slate-950 transition hover:bg-emerald-300"
                >
                  Bekijk mijn energiekosten
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
            <section id="mijn-energie" className="scroll-mt-8">
              <div className="mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
                  Jouw situatie
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight">
                  Inzicht in je energiekosten
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Heb je de BespaarRadar-check ingevuld? Dan gebruiken
                  we je eerder opgegeven gegevens om je huidige
                  situatie te laten zien.
                </p>
              </div>

              <EnergieCheck />
            </section>

            <section className="mt-10 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-800">
                  In ontwikkeling
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-3xl">
                Binnenkort energieaanbiedingen vergelijken
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-700">
                We bereiden een koppeling met een externe
                vergelijkingspartner voor. Zodra die beschikbaar is,
                willen we hier actuele energiecontracten kunnen tonen.
                Op dit moment tonen we nog geen live tarieven,
                aanbiedingen of overstapmogelijkheden.
              </p>

              <p className="mt-4 text-sm font-semibold text-emerald-900">
                Je kunt nu alvast je kosten bekijken en ontdekken
                waarop je moet letten.
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
                Goedkoper is niet altijd beter
              </h2>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                Een lager maandbedrag betekent niet automatisch dat
                een contract over een heel jaar voordeliger is.
                Controleer daarom de verwachte jaarkosten en de
                voorwaarden. Zeker bij zonnepanelen, dynamische
                tarieven of een lopend vast contract kunnen
                verschillen belangrijk zijn.
              </p>
            </section>

            <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <h2 className="text-xl font-black">
                  Ook je andere vaste lasten bekijken?
                </h2>

                <p className="mt-2 leading-7 text-slate-600">
                  Met de BespaarRadar-check krijg je inzicht in
                  meerdere maandelijkse kosten.
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
              partnervergelijker beschikbaar komt, kunnen we een
              vergoeding ontvangen als je via een partner
              overstapt. De voorwaarden van de aanbieder zijn
              altijd leidend.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}