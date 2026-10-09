"use client";

import { useEffect, useState } from "react";

type InternetGegevens = {
  internetProvider?: string;
  internetSpeed?: string;
  internetContract?: string;
  internet?: string;
};

function formatEuro(value: string) {
  const amount = Number(value.replace(",", "."));
  if (!Number.isFinite(amount) || amount <= 0) return null;

  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
}

export default function InternetCheck() {
  const [gegevens, setGegevens] = useState<InternetGegevens | null>(null);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    try {
      const opgeslagen = sessionStorage.getItem("bespaarradar-result");

      if (opgeslagen) {
        const parsed = JSON.parse(opgeslagen);

        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          setGegevens(parsed);
        }
      }
    } catch {
      // Bij ontbrekende gegevens blijft de algemene pagina beschikbaar.
    } finally {
      setGeladen(true);
    }
  }, []);

  if (!geladen) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-sm text-slate-500">Je gegevens worden geladen...</p>
      </div>
    );
  }

  if (!gegevens) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
        <h2 className="text-2xl font-black">Jouw internetsituatie</h2>

        <p className="mt-3 leading-7 text-slate-600">
          Doe eerst de gratis BespaarRadar-check om hier jouw persoonlijke
          internetgegevens terug te zien.
        </p>

        <a
          href="/"
          className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800"
        >
          Start de gratis check
        </a>
      </div>
    );
  }

  const items = [
    { label: "Internetprovider", value: gegevens.internetProvider },
    { label: "Internetsnelheid", value: gegevens.internetSpeed },
    { label: "Contract", value: gegevens.internetContract },
  ].filter(
    (item) => typeof item.value === "string" && item.value.trim()
  );

  const maandbedrag =
    typeof gegevens.internet === "string"
      ? formatEuro(gegevens.internet)
      : null;

  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
      <div className="text-xs font-black uppercase tracking-widest text-emerald-700">
        JOUW INTERNETOVERZICHT
      </div>

      <h2 className="mt-3 text-2xl font-black">
        Dit heb je ingevuld
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Deze gegevens komen uit jouw BespaarRadar-check.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5">
        <p className="text-sm font-semibold text-slate-500">
          Opgegeven maandbedrag
        </p>

        <p className="mt-2 text-3xl font-black text-slate-950">
          {maandbedrag ?? "Niet ingevuld"}
          {maandbedrag && (
            <span className="ml-2 text-sm font-medium text-slate-500">
              per maand
            </span>
          )}
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Dit is je opgegeven maandbedrag, geen berekende besparing.
          Let bij vergelijken ook op tijdelijke kortingen en eenmalige kosten.
        </p>
      </div>

      {items.length > 0 && (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.label} className="rounded-xl bg-white p-4">
              <p className="text-xs font-semibold text-slate-500">
                {item.label}
              </p>

              <p className="mt-1 font-bold text-slate-950">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Controleer ook welke verbinding op jouw adres beschikbaar is.
        De goedkoopste optie is niet automatisch de beste keuze.
      </p>
    </div>
  );
}
