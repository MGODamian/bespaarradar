"use client";

import { useEffect, useState } from "react";

type SavedSubscriptions = {
  netflix?: boolean;
  disney?: boolean;
  videoland?: boolean;
  spotify?: boolean;
  otherSubscriptions?: string;
};

const diensten = [
  { key: "netflix", name: "Netflix" },
  { key: "disney", name: "Disney+" },
  { key: "videoland", name: "Videoland" },
  { key: "spotify", name: "Spotify" },
] as const;

export default function AbonnementenCheck() {
  const [saved, setSaved] = useState<SavedSubscriptions | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("bespaarradar-result");
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
          setSaved(parsed as SavedSubscriptions);
        }
      }
    } catch {
      // Ongeldige of ontbrekende gegevens: toon de algemene checklist.
    }
    setLoaded(true);
  }, []);

  const selected = diensten.filter(
    (dienst) => saved?.[dienst.key] === true
  );

  const otherAmount = saved?.otherSubscriptions?.trim() ?? "";
  const hasOther = otherAmount !== "" && Number(otherAmount.replace(",", ".")) > 0;
  const hasPersonalData = saved !== null;

  if (!loaded) {
    return (
      <div className="mt-8 rounded-2xl bg-slate-50 p-6 text-slate-600">
        Je abonnementen worden geladen...
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <h2 className="text-lg font-black text-slate-950">
        {hasPersonalData
          ? "Jouw geselecteerde abonnementen"
          : "Begin met deze controle"}
      </h2>

      <p className="mt-2 leading-7 text-slate-600">
        {hasPersonalData
          ? "Dit heb je tijdens je BespaarRadar-check opgegeven."
          : "Controleer welke van deze abonnementen je gebruikt."}
      </p>

      {hasPersonalData && selected.length === 0 && !hasOther ? (
        <p className="mt-5 rounded-xl bg-white p-4 text-slate-700">
          Je hebt geen abonnementen geselecteerd waarvoor we hier een
          persoonlijk overzicht kunnen tonen.
        </p>
      ) : (
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {(hasPersonalData
            ? selected.map((dienst) => dienst.name)
            : [
                "Netflix",
                "Disney+",
                "Videoland",
                "Spotify",
                "Sportabonnementen",
                "Overige abonnementen",
              ]
          ).map((name) => (
            <div
              key={name}
              className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-4"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                &#10003;
              </span>
              <span className="font-bold text-slate-800">{name}</span>
            </div>
          ))}

          {hasPersonalData && hasOther && (
            <div className="rounded-xl border border-emerald-100 bg-white px-4 py-4">
              <div className="font-bold text-slate-800">
                Overige abonnementen
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Door jou opgegeven: {new Intl.NumberFormat("nl-NL", {
                  style: "currency",
                  currency: "EUR",
                }).format(Number(otherAmount.replace(",", ".")))} per maand
              </p>
            </div>
          )}
        </div>
      )}

      <p className="mt-5 text-sm leading-6 text-slate-600">
        Controleer per abonnement hoe vaak je het gebruikt, wat je
        betaalt en welke opzegvoorwaarden gelden. We berekenen
        hier geen gegarandeerde besparing.
      </p>
    </div>
  );
}
