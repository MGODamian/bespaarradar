import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          Transparantie
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
          Disclaimer
        </h1>

        <div className="mt-8 space-y-7 leading-8 text-slate-600">
          <section>
            <h2 className="text-xl font-black text-slate-950">
              Indicatief resultaat
            </h2>
            <p className="mt-2">
              De BespaarRadar-score en aanbevelingen zijn indicatief. Ze zijn
              bedoeld om te laten zien welke vaste lasten mogelijk interessant
              zijn om verder te vergelijken.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Geen gegarandeerde besparing
            </h2>
            <p className="mt-2">
              BespaarRadar garandeert geen specifieke besparing. Werkelijke
              prijzen, beschikbaarheid, voorwaarden en mogelijke besparingen
              kunnen per huishouden, adres, aanbieder en moment verschillen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Affiliatepartners
            </h2>
            <p className="mt-2">
              BespaarRadar kan gebruikmaken van affiliate-links. Wanneer je via
              zo'n link naar een externe aanbieder gaat en daar een product of
              dienst afsluit, kan BespaarRadar daarvoor een vergoeding
              ontvangen. Dit brengt voor jou geen extra kosten met zich mee.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950">
              Externe websites
            </h2>
            <p className="mt-2">
              BespaarRadar is niet verantwoordelijk voor prijzen, informatie,
              voorwaarden of diensten op websites van externe partijen.
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
