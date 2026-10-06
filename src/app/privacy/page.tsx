import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          Privacy
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
          Privacyverklaring
        </h1>

        <div className="mt-8 space-y-7 leading-8 text-slate-600">
          <p>
            BespaarRadar helpt bezoekers inzicht te krijgen in hun vaste lasten
            en mogelijke vergelijkingsmogelijkheden.
          </p>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Gegevens uit de bespaarcheck
            </h2>
            <p className="mt-2">
              De gegevens die je in de bespaarcheck invult, worden in de
              huidige versie gebruikt om het resultaat in je browser te
              berekenen. BespaarRadar vraagt daarbij niet om bankgegevens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Externe partners
            </h2>
            <p className="mt-2">
              BespaarRadar kan links naar externe vergelijkings- en
              affiliatepartners bevatten. Wanneer je zo'n partner bezoekt,
              geldt het privacybeleid van die externe partij.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Wijzigingen
            </h2>
            <p className="mt-2">
              Deze privacyverklaring kan worden aangepast wanneer nieuwe
              functies, partners of analysetools aan BespaarRadar worden
              toegevoegd.
            </p>
          </section>
        </div>

        <Back />
      </section>
    </main>
  );
}

function Header() {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <Link href="/" className="text-2xl font-black tracking-tight">
          Bespaar<span className="text-emerald-500">Radar</span>
        </Link>
      </div>
    </header>
  );
}

function Back() {
  return (
    <Link
      href="/"
      className="mt-10 inline-flex rounded-2xl bg-slate-950 px-6 py-4 font-black text-white"
    >
      ← Terug naar BespaarRadar
    </Link>
  );
}
