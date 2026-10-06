import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
          Contact
        </span>

        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
          Neem contact op
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Heb je een vraag, opmerking of wil je samenwerken met BespaarRadar?
          Neem dan contact met ons op.
        </p>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7">
          <h2 className="text-xl font-black">Contactgegevens</h2>

          <p className="mt-3 leading-7 text-slate-600">
            Een openbaar contactadres wordt toegevoegd voordat BespaarRadar
            volledig wordt gelanceerd.
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
