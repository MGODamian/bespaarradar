import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-xl font-black tracking-tight">
              Bespaar<span className="text-emerald-500">Radar</span>
            </Link>

            <p className="mt-2 text-sm text-slate-500">
              Slimmer omgaan met je vaste lasten.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-slate-600">
            <Link href="/over-ons" className="hover:text-emerald-600">
              Over ons
            </Link>

            <Link href="/privacy" className="hover:text-emerald-600">
              Privacy
            </Link>

            <Link href="/disclaimer" className="hover:text-emerald-600">
              Disclaimer
            </Link>

            <Link href="/contact" className="hover:text-emerald-600">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-xs leading-6 text-slate-400">
          © 2026 BespaarRadar. Resultaten zijn indicatief.
          BespaarRadar kan een vergoeding ontvangen via externe partners.
        </div>
      </div>
    </footer>
  );
}

