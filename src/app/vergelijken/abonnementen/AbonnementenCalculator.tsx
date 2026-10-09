
"use client";

import { useEffect, useState } from "react";

type Abonnement = {
  id: string;
  naam: string;
  bedrag: string;
  stoppen: boolean;
};

const STORAGE_KEY = "bespaarradar-abonnementen-calculator";

const euro = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
});

function parseBedrag(waarde: string): number {
  const bedrag = Number(waarde.trim().replace(",", "."));
  return Number.isFinite(bedrag) && bedrag > 0 ? bedrag : 0;
}

function nieuwAbonnement(): Abonnement {
  return {
    id: crypto.randomUUID(),
    naam: "",
    bedrag: "",
    stoppen: false,
  };
}

export default function AbonnementenCalculator() {
  const [abonnementen, setAbonnementen] = useState<Abonnement[]>([]);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    try {
      const opgeslagen = localStorage.getItem(STORAGE_KEY);

      if (opgeslagen) {
        const data: unknown = JSON.parse(opgeslagen);

        if (Array.isArray(data)) {
          const geldig = data.filter(
            (item): item is Abonnement =>
              item !== null &&
              typeof item === "object" &&
              typeof item.id === "string" &&
              typeof item.naam === "string" &&
              typeof item.bedrag === "string" &&
              typeof item.stoppen === "boolean"
          );

          setAbonnementen(geldig);
        }
      }
    } catch {
      // Bij ongeldige gegevens beginnen we met een lege lijst.
    }

    setGeladen(true);
  }, []);

  useEffect(() => {
    if (!geladen) return;

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(abonnementen)
      );
    } catch {
      // Calculator blijft werken zonder lokale opslag.
    }
  }, [abonnementen, geladen]);

  function toevoegen() {
    setAbonnementen((vorige) => [
      ...vorige,
      nieuwAbonnement(),
    ]);
  }

  function aanpassen(
    id: string,
    veld: "naam" | "bedrag" | "stoppen",
    waarde: string | boolean
  ) {
    setAbonnementen((vorige) =>
      vorige.map((abonnement) =>
        abonnement.id === id
          ? { ...abonnement, [veld]: waarde }
          : abonnement
      )
    );
  }

  function verwijderen(id: string) {
    setAbonnementen((vorige) =>
      vorige.filter((abonnement) => abonnement.id !== id)
    );
  }

  const totaal = abonnementen.reduce(
    (som, abonnement) =>
      som + parseBedrag(abonnement.bedrag),
    0
  );

  const mogelijkeBesparing = abonnementen.reduce(
    (som, abonnement) =>
      som +
      (abonnement.stoppen
        ? parseBedrag(abonnement.bedrag)
        : 0),
    0
  );

  const overblijvend = Math.max(
    0,
    totaal - mogelijkeBesparing
  );

  return (
    <section
      id="abonnementen-calculator"
      className="mt-14 scroll-mt-8"
    >
      <div className="mb-7">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-700">
          Interactieve calculator
        </span>

        <h2 className="mt-3 text-3xl font-black tracking-tight">
          Bereken je abonnementskosten
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          Voeg je abonnementen toe en vul in wat je
          maandelijks betaalt. Vink abonnementen aan die
          je mogelijk wilt stopzetten om te zien hoeveel
          je daarmee zou kunnen besparen.
        </p>
      </div>

      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        {!geladen ? (
          <p className="text-slate-600">
            Calculator wordt geladen...
          </p>
        ) : (
          <>
            {abonnementen.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50 p-7 text-center">
                <h3 className="text-lg font-black">
                  Nog geen abonnementen toegevoegd
                </h3>

                <p className="mt-2 text-slate-600">
                  Begin met je eerste abonnement.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {abonnementen.map((abonnement, index) => (
                  <div
                    key={abonnement.id}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h3 className="font-black">
                        Abonnement {index + 1}
                      </h3>

                      <button
                        type="button"
                        onClick={() =>
                          verwijderen(abonnement.id)
                        }
                        className="rounded-xl px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50"
                      >
                        Verwijderen
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">
                          Naam abonnement
                        </span>

                        <input
                          type="text"
                          value={abonnement.naam}
                          onChange={(event) =>
                            aanpassen(
                              abonnement.id,
                              "naam",
                              event.target.value
                            )
                          }
                          placeholder="Bijv. Netflix"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-500"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-bold text-slate-700">
                          Kosten per maand (€)
                        </span>

                        <input
                          type="text"
                          inputMode="decimal"
                          value={abonnement.bedrag}
                          onChange={(event) =>
                            aanpassen(
                              abonnement.id,
                              "bedrag",
                              event.target.value
                            )
                          }
                          placeholder="Bijv. 12,99"
                          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-emerald-500"
                        />
                      </label>
                    </div>

                    <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-xl bg-white p-4">
                      <input
                        type="checkbox"
                        checked={abonnement.stoppen}
                        onChange={(event) =>
                          aanpassen(
                            abonnement.id,
                            "stoppen",
                            event.target.checked
                          )
                        }
                        className="h-5 w-5 accent-emerald-600"
                      />

                      <span className="text-sm font-bold text-slate-700">
                        Dit abonnement overweeg ik stop te zetten
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={toevoegen}
              className="mt-6 w-full rounded-2xl bg-emerald-600 px-6 py-4 font-extrabold text-white transition hover:bg-emerald-700"
            >
              + Abonnement toevoegen
            </button>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-bold text-slate-300">
                  Totale maandkosten
                </p>

                <p className="mt-3 text-3xl font-black">
                  {euro.format(totaal)}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {euro.format(totaal * 12)} per jaar
                </p>
              </div>

              <div className="rounded-2xl bg-emerald-100 p-5 text-emerald-950">
                <p className="text-sm font-bold">
                  Mogelijke besparing
                </p>

                <p className="mt-3 text-3xl font-black">
                  {euro.format(mogelijkeBesparing)}
                </p>

                <p className="mt-2 text-sm text-emerald-800">
                  {euro.format(mogelijkeBesparing * 12)} per jaar
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5 text-slate-950">
                <p className="text-sm font-bold text-slate-600">
                  Kosten na je keuzes
                </p>

                <p className="mt-3 text-3xl font-black">
                  {euro.format(overblijvend)}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  {euro.format(overblijvend * 12)} per jaar
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500">
              Dit is een rekenvoorbeeld op basis van jouw
              ingevulde bedragen. Werkelijke besparingen
              hangen af van opzegtermijnen, contracten en
              eventuele extra kosten. Je gegevens worden
              alleen lokaal in deze browser opgeslagen.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
