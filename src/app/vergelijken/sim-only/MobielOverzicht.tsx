"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type MobileData = {
  mobileProvider?: string;
  mobileType?: string;
  mobileData?: string;
  mobileContract?: string;
  mobile?: string;
};

const STORAGE_KEY = "bespaarradar-result";

function readable(value: unknown) {
  return typeof value === "string" && value.trim()
    ? value.trim()
    : "Niet ingevuld";
}

function formatAmount(value: unknown) {
  if (typeof value !== "string") return null;

  const number = Number(value.replace(",", "."));

  if (!Number.isFinite(number) || number < 0 || !value.trim()) {
    return null;
  }

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(number);
}

export default function MobielOverzicht() {
  const [data, setData] = useState<MobileData | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (!saved) return;

      const parsed: unknown = JSON.parse(saved);

      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        setData(parsed as MobileData);
      }
    } catch {
      // Ongeldige of ontbrekende gegevens: toon de startknop.
    }
  }, []);

  if (!data) {
    return (
      <section className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
        <h2 className="text-xl font-black">Jouw mobiele situatie</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Doe eerst de gratis BespaarRadar-check om hier jouw ingevulde
          mobiele gegevens terug te zien.
        </p>
        <Link
          href="/"
          className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
        >
          Start de gratis check
        </Link>
      </section>
    );
  }

  const fields = [
    ["Provider", readable(data.mobileProvider)],
    ["Type abonnement", readable(data.mobileType)],
    ["Databundel", readable(data.mobileData)],
    ["Contract", readable(data.mobileContract)],
  ];

  return (
    <section className="mb-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
      <div className="text-xs font-black uppercase tracking-widest text-emerald-700">
        Jouw mobiele overzicht
      </div>

      <h2 className="mt-3 text-2xl font-black">Dit heb je ingevuld</h2>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        Deze gegevens komen uit jouw BespaarRadar-check.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5">
        <div className="text-xs font-bold text-slate-500">
          Opgegeven maandbedrag
        </div>

        <div className="mt-2 text-3xl font-black">
          {formatAmount(data.mobile) ?? "Niet ingevuld"}
          {formatAmount(data.mobile) && (
            <span className="ml-2 text-sm font-normal text-slate-500">
              per maand
            </span>
          )}
        </div>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Dit is jouw opgegeven bedrag, geen berekende besparing.
        </p>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {fields.map(([label, value]) => (
          <div key={label} className="rounded-xl bg-white p-4">
            <div className="text-xs font-semibold text-slate-500">
              {label}
            </div>
            <div className="mt-1 font-bold text-slate-950">
              {value}
            </div>
          </div>
        ))}
      </div>

      {data.mobileType?.toLowerCase().includes("toestel") && (
        <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          Bij een abonnement met toestel kan een deel van het maandbedrag
          bestaan uit toestelbetaling. Daarom vergelijken we dit bedrag
          niet rechtstreeks met de prijs van een sim-onlyabonnement.
        </p>
      )}

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Voor een goede vergelijking zijn ook netwerkdekking, contractduur
        en eventuele eenmalige kosten belangrijk.
      </p>
    </section>
  );
}
