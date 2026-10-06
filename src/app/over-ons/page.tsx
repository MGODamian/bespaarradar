import Link from "next/link";

export default function OverOnsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          Over ons
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
          Slimmer kijken naar je vaste lasten.
        </h1>

        <div className="mt-8 space-y-6 leading-8 text-slate-600">
          <p>
            BespaarRadar is gebouwd met één eenvoudig doel: het makkelijker
            maken om te ontdekken welke vaste lasten het controleren waard
            zijn.
          </p>

          <p>
            In plaats van direct allerlei ingewikkelde vergelijkingen te tonen,
            begint BespaarRadar met een korte check van onder andere energie,
            internet, mobiel en abonnementen.
          </p>

          <p>
            Op basis daarvan krijg je een overzicht van de categorieën die voor
            jou mogelijk het interessantst zijn om verder te bekijken.
          </p>

          <p>
            BespaarRadar wordt verder ontwikkeld met als doel actuele
            vergelijkingsmogelijkheden en aanbiedingen van externe partners toe
            te voegen.
          </p>
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
