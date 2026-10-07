"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Costs = {
  householdSize: string;
  homeType: string;
  solarPanels: string;
  energyProvider: string;
  energyContract: string;
  energy: string;

  internetProvider: string;
  internetPackage: string;
  internetSpeed: string;
  internetContract: string;
  internet: string;

  mobileProvider: string;
  mobileType: string;
  mobileData: string;
  mobileContract: string;
  mobile: string;

  netflix: boolean;
  disney: boolean;
  videoland: boolean;
  spotify: boolean;
  otherSubscriptions: string;
};

const initialCosts: Costs = {
  householdSize: "",
  homeType: "",
  solarPanels: "",
  energyProvider: "",
  energyContract: "",
  energy: "",

  internetProvider: "",
  internetPackage: "",
  internetSpeed: "",
  internetContract: "",
  internet: "",

  mobileProvider: "",
  mobileType: "",
  mobileData: "",
  mobileContract: "",
  mobile: "",

  netflix: false,
  disney: false,
  videoland: false,
  spotify: false,
  otherSubscriptions: "",
};

const steps = [
  "Start",
  "Energie",
  "Internet",
  "Mobiel",
  "Abonnementen",
];

type ResultCalculations = {
  internetSignal: number;
  mobileSignal: number;
  subscriptionSignal: number;
  energyPriority: number;
  internetPriority: number;
  mobilePriority: number;
  subscriptionPriority: number;
  radarScore: number;
  opportunities: number;
};

export default function Home() {
  const router = useRouter();

  const [screen, setScreen] = useState<"home" | "check" | "result">("home");
  const [step, setStep] = useState(0);
  const [costs, setCosts] = useState<Costs>(initialCosts);
  const [isRestoringResult, setIsRestoringResult] = useState(true);

  useEffect(() => {
    const savedResult = sessionStorage.getItem("bespaarradar-result");

    if (savedResult) {
      try {
        const savedCosts = JSON.parse(savedResult) as Costs;
        setCosts(savedCosts);
        setScreen("result");
        sessionStorage.removeItem("bespaarradar-result");
      } catch {
        sessionStorage.removeItem("bespaarradar-result");
      }
    }

    setIsRestoringResult(false);
  }, []);

  const calculations = useMemo<ResultCalculations>(() => {
    const energy = Number(costs.energy) || 0;
    const internet = Number(costs.internet) || 0;
    const mobile = Number(costs.mobile) || 0;
    const otherSubscriptions = Number(costs.otherSubscriptions) || 0;

    // Dit zijn signalen voor prioritering.
    // Het zijn GEEN berekende of gegarandeerde besparingen.

    let energyPriority = 0;

    if (energy > 0) energyPriority += 1;

    if (
      costs.energyContract === "Variabel" ||
      costs.energyContract === "Dynamisch" ||
      costs.energyContract === "Weet ik niet"
    ) {
      energyPriority += 2;
    }

    if (energy >= 200) {
      energyPriority += 2;
    } else if (energy >= 140) {
      energyPriority += 1;
    }

    let internetSignal = 0;
    let internetPriority = 0;

    if (internet > 0) internetPriority += 1;

    if (internet >= 80) {
      internetSignal = 3;
      internetPriority += 3;
    } else if (internet >= 65) {
      internetSignal = 2;
      internetPriority += 2;
    } else if (internet >= 50) {
      internetSignal = 1;
      internetPriority += 1;
    }

    if (
      costs.internetContract === "Contractvrij" ||
      costs.internetContract === "Bijna afgelopen"
    ) {
      internetPriority += 2;
    }

    let mobileSignal = 0;
    let mobilePriority = 0;

    if (mobile > 0) mobilePriority += 1;

    if (costs.mobileType === "Sim-only") {
      if (mobile >= 35) {
        mobileSignal = 3;
        mobilePriority += 3;
      } else if (mobile >= 25) {
        mobileSignal = 2;
        mobilePriority += 2;
      } else if (mobile >= 18) {
        mobileSignal = 1;
        mobilePriority += 1;
      }
    }

    if (
      costs.mobileContract === "Contractvrij" ||
      costs.mobileContract === "Bijna afgelopen"
    ) {
      mobilePriority += 2;
    }

    const subscriptionCount =
      Number(costs.netflix) +
      Number(costs.disney) +
      Number(costs.videoland) +
      Number(costs.spotify);

    let subscriptionSignal = 0;
    let subscriptionPriority = 0;

    if (subscriptionCount >= 4) {
      subscriptionSignal += 3;
      subscriptionPriority += 3;
    } else if (subscriptionCount === 3) {
      subscriptionSignal += 2;
      subscriptionPriority += 2;
    } else if (subscriptionCount === 2) {
      subscriptionSignal += 1;
      subscriptionPriority += 1;
    }

    if (otherSubscriptions >= 50) {
      subscriptionSignal += 3;
      subscriptionPriority += 3;
    } else if (otherSubscriptions >= 25) {
      subscriptionSignal += 2;
      subscriptionPriority += 2;
    } else if (otherSubscriptions > 0) {
      subscriptionPriority += 1;
    }

    const priorities = [
      energyPriority,
      internetPriority,
      mobilePriority,
      subscriptionPriority,
    ];

    const opportunities = priorities.filter((value) => value >= 3).length;

    const totalPriority = priorities.reduce(
      (total, value) => total + Math.min(value, 6),
      0
    );

    const radarScore = Math.min(
      100,
      Math.max(10, Math.round((totalPriority / 24) * 100))
    );

    return {
      internetSignal,
      mobileSignal,
      subscriptionSignal,
      energyPriority,
      internetPriority,
      mobilePriority,
      subscriptionPriority,
      radarScore,
      opportunities,
    };
  }, [costs]);

  function startCheck() {
    setStep(0);
    setScreen("check");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function next() {
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
    } else {
      setScreen("result");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    if (step === 0) {
      setScreen("home");
    } else {
      setStep((current) => current - 1);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restart() {
    setCosts(initialCosts);
    setStep(0);
    setScreen("check");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goHome() {
    setScreen("home");
    setStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (isRestoringResult) {
    return <main className="min-h-screen bg-[#f7faf7]" />;
  }

  if (screen === "check") {
    return (
      <CheckScreen
        step={step}
        costs={costs}
        setCosts={setCosts}
        next={next}
        back={back}
      />
    );
  }

  if (screen === "result") {
    return (
      <ResultScreen
        costs={costs}
        calculations={calculations}
        restart={restart}
        goHome={goHome}
      />
    );
  }

  return <HomeScreen startCheck={startCheck} />;
}

function Header({ onLogo }: { onLogo: () => void }) {
  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <button
          type="button"
          onClick={onLogo}
          className="text-2xl font-black tracking-tight text-slate-950"
        >
          Bespaar<span className="text-emerald-500">Radar</span>
        </button>

        <div className="hidden items-center gap-2 text-sm font-bold text-slate-500 sm:flex">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            ✓
          </span>

          Gratis bespaarcheck
        </div>
      </div>
    </header>
  );
}

function HomeScreen({ startCheck }: { startCheck: () => void }) {
  const categories = [
    ["⚡", "Energie", "Gas & elektriciteit"],
    ["🌐", "Internet", "Internet, TV & bellen"],
    ["📱", "Mobiel", "Abonnement & sim-only"],
    ["📺", "Abonnementen", "Streaming & meer"],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header onLogo={() => window.scrollTo({ top: 0, behavior: "smooth" })} />

      <section className="relative overflow-hidden">
        <div className="absolute left-[65%] top-28 -z-10 h-96 w-96 rounded-full bg-emerald-100 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
              ✓ Gratis • Geen account nodig • Binnen 2 minuten
            </div>

            <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.03] tracking-[-0.045em] md:text-7xl">
              Ontdek waar jij mogelijk{" "}
              <span className="text-emerald-500">geld kunt besparen.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Controleer je vaste lasten en ontdek welke uitgaven het waard
              zijn om opnieuw te vergelijken.
            </p>

            <button
              type="button"
              onClick={startCheck}
              className="mt-9 rounded-2xl bg-emerald-500 px-7 py-4 text-lg font-black text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              Start mijn bespaarcheck →
            </button>

            <p className="mt-4 text-sm font-semibold text-slate-500">
              Geen bankgegevens of betaalgegevens nodig
            </p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/70">
            <div className="text-xs font-black uppercase tracking-wider text-emerald-600">
              BESPAARRADAR
            </div>

            <h2 className="mt-4 text-3xl font-black">
              Eén check voor je vaste lasten.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Ontdek welke maandelijkse kosten mogelijk het vergelijken waard
              zijn.
            </p>

            <div className="mt-7 space-y-3">
              {categories.map(([icon, title]) => (
                <div
                  key={title}
                  className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    {icon}
                  </span>

                  <span className="font-black">{title}</span>

                  <span className="ml-auto text-emerald-500">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-[#f8faf9]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
              Jouw vaste lasten
            </div>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Vier plekken waar geld kan blijven liggen.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              BespaarRadar helpt je bepalen welke vaste lasten als eerste het
              vergelijken waard zijn.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl">
                  {icon}
                </div>

                <h3 className="mt-5 text-xl font-black">{title}</h3>

                <p className="mt-2 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckScreen({
  step,
  costs,
  setCosts,
  next,
  back,
}: {
  step: number;
  costs: Costs;
  setCosts: React.Dispatch<React.SetStateAction<Costs>>;
  next: () => void;
  back: () => void;
}) {
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header onLogo={back} />

      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16">
        <div className="mb-8">
          <div className="mb-3 flex justify-between text-sm font-bold">
            <span className="text-slate-500">
              Stap {step + 1} van {steps.length}
            </span>

            <span className="text-emerald-600">{steps[step]}</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-emerald-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-12">
          {step === 0 && (
            <>
              <Badge>START</Badge>

              <h1 className="mt-4 text-4xl font-black">
                We gaan je vaste lasten bekijken.
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Beantwoord een paar vragen. Daarna laat BespaarRadar zien welke
                kosten mogelijk het interessantst zijn om opnieuw te
                vergelijken.
              </p>

              <div className="mt-8 space-y-3">
                <Info text="Geen bankkoppeling nodig" />
                <Info text="Geen account nodig" />
                <Info text="Je ziet direct je resultaat" />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <Badge>⚡ ENERGIE</Badge>

              <h1 className="mt-4 text-4xl font-black">
                Vertel ons over je energiecontract.
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                Hiermee kunnen we bepalen of energie interessant is om verder
                te vergelijken.
              </p>

              <QuestionLabel>Hoeveel personen wonen er thuis?</QuestionLabel>

              <OptionGrid>
                {["1", "2", "3", "4", "5+"].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.householdSize === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        householdSize: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Wat voor woning heb je?</QuestionLabel>

              <OptionGrid>
                {["Appartement", "Tussenwoning", "Hoekwoning", "Vrijstaand"].map(
                  (value) => (
                    <OptionButton
                      key={value}
                      active={costs.homeType === value}
                      onClick={() =>
                        setCosts((old) => ({
                          ...old,
                          homeType: value,
                        }))
                      }
                    >
                      {value}
                    </OptionButton>
                  )
                )}
              </OptionGrid>

              <QuestionLabel>Heb je zonnepanelen?</QuestionLabel>

              <OptionGrid>
                {["Ja", "Nee"].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.solarPanels === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        solarPanels: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Wat voor energiecontract heb je?</QuestionLabel>

              <OptionGrid>
                {["Vast", "Variabel", "Dynamisch", "Weet ik niet"].map(
                  (value) => (
                    <OptionButton
                      key={value}
                      active={costs.energyContract === value}
                      onClick={() =>
                        setCosts((old) => ({
                          ...old,
                          energyContract: value,
                        }))
                      }
                    >
                      {value}
                    </OptionButton>
                  )
                )}
              </OptionGrid>

              <QuestionLabel>
                Welke energieleverancier heb je?
              </QuestionLabel>

              <TextInput
                value={costs.energyProvider}
                onChange={(value) =>
                  setCosts((old) => ({
                    ...old,
                    energyProvider: value,
                  }))
                }
                placeholder="Bijvoorbeeld Eneco"
              />

              <QuestionLabel>
                Wat betaal je ongeveer per maand?
              </QuestionLabel>

              <MoneyInput
                value={costs.energy}
                onChange={(value) =>
                  setCosts((old) => ({
                    ...old,
                    energy: value,
                  }))
                }
                placeholder="Bijvoorbeeld 185"
              />

              <Hint>
                Voor een echte prijsvergelijking zijn later actuele tarieven
                en je daadwerkelijke energieverbruik nodig.
              </Hint>
            </>
          )}

          {step === 2 && (
            <>
              <Badge>🌐 INTERNET</Badge>

              <h1 className="mt-4 text-4xl font-black">
                Vertel ons over je internetabonnement.
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                Niet ieder internetabonnement is hetzelfde. Daarom kijken we
                ook naar je pakket, snelheid en contract.
              </p>

              <QuestionLabel>
                Welke internetprovider heb je?
              </QuestionLabel>

              <OptionGrid>
                {[
                  "KPN",
                  "Ziggo",
                  "Odido",
                  "Delta",
                  "Youfone",
                  "Andere",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.internetProvider === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        internetProvider: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Wat zit er in je pakket?</QuestionLabel>

              <OptionGrid>
                {[
                  "Alleen internet",
                  "Internet + TV",
                  "Internet + TV + bellen",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.internetPackage === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        internetPackage: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>
                Welke internetsnelheid heb je ongeveer?
              </QuestionLabel>

              <OptionGrid>
                {[
                  "Tot 100 Mbit",
                  "100 - 500 Mbit",
                  "500 - 1000 Mbit",
                  "1 Gbit of meer",
                  "Weet ik niet",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.internetSpeed === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        internetSpeed: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Hoe zit het met je contract?</QuestionLabel>

              <OptionGrid>
                {[
                  "Loopt nog",
                  "Contractvrij",
                  "Bijna afgelopen",
                  "Weet ik niet",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.internetContract === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        internetContract: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Wat betaal je per maand?</QuestionLabel>

              <MoneyInput
                value={costs.internet}
                onChange={(value) =>
                  setCosts((old) => ({
                    ...old,
                    internet: value,
                  }))
                }
                placeholder="Bijvoorbeeld 62"
              />

              <Hint>
                Voor actuele aanbiedingen is later ook je postcode nodig,
                omdat internetbeschikbaarheid per adres verschilt.
              </Hint>
            </>
          )}

          {step === 3 && (
            <>
              <Badge>📱 MOBIEL</Badge>

              <h1 className="mt-4 text-4xl font-black">
                Vertel ons over je mobiele abonnement.
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                We maken onderscheid tussen sim-only, prepaid en abonnementen
                met een toestel.
              </p>

              <QuestionLabel>Welke provider heb je?</QuestionLabel>

              <OptionGrid>
                {[
                  "KPN",
                  "Odido",
                  "Vodafone",
                  "Ben",
                  "Simyo",
                  "Youfone",
                  "Andere",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.mobileProvider === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        mobileProvider: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>
                Welk type abonnement heb je?
              </QuestionLabel>

              <OptionGrid>
                {["Sim-only", "Met toestel", "Prepaid"].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.mobileType === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        mobileType: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>
                Hoeveel mobiele data heb je?
              </QuestionLabel>

              <OptionGrid>
                {[
                  "Tot 5 GB",
                  "5 - 15 GB",
                  "15 - 30 GB",
                  "30 - 50 GB",
                  "Onbeperkt",
                  "Weet ik niet",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.mobileData === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        mobileData: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Hoe zit het met je contract?</QuestionLabel>

              <OptionGrid>
                {[
                  "Loopt nog",
                  "Contractvrij",
                  "Bijna afgelopen",
                  "Weet ik niet",
                ].map((value) => (
                  <OptionButton
                    key={value}
                    active={costs.mobileContract === value}
                    onClick={() =>
                      setCosts((old) => ({
                        ...old,
                        mobileContract: value,
                      }))
                    }
                  >
                    {value}
                  </OptionButton>
                ))}
              </OptionGrid>

              <QuestionLabel>Wat betaal je per maand?</QuestionLabel>

              <MoneyInput
                value={costs.mobile}
                onChange={(value) =>
                  setCosts((old) => ({
                    ...old,
                    mobile: value,
                  }))
                }
                placeholder="Bijvoorbeeld 27"
              />

              {costs.mobileType === "Met toestel" && (
                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-800">
                  Bij een abonnement met toestel kan een deel van je maandbedrag
                  uit toestelbetaling bestaan. Daarom vergelijken we dit bedrag
                  niet rechtstreeks met een sim-only abonnement.
                </div>
              )}
            </>
          )}

          {step === 4 && (
            <>
              <Badge>📺 ABONNEMENTEN</Badge>

              <h1 className="mt-4 text-4xl font-black">
                Welke abonnementen heb je?
              </h1>

              <p className="mt-4 leading-7 text-slate-600">
                Selecteer de diensten waarvoor je momenteel betaalt.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Toggle
                  label="Netflix"
                  active={costs.netflix}
                  onClick={() =>
                    setCosts((old) => ({
                      ...old,
                      netflix: !old.netflix,
                    }))
                  }
                />

                <Toggle
                  label="Disney+"
                  active={costs.disney}
                  onClick={() =>
                    setCosts((old) => ({
                      ...old,
                      disney: !old.disney,
                    }))
                  }
                />

                <Toggle
                  label="Videoland"
                  active={costs.videoland}
                  onClick={() =>
                    setCosts((old) => ({
                      ...old,
                      videoland: !old.videoland,
                    }))
                  }
                />

                <Toggle
                  label="Spotify"
                  active={costs.spotify}
                  onClick={() =>
                    setCosts((old) => ({
                      ...old,
                      spotify: !old.spotify,
                    }))
                  }
                />
              </div>

              <QuestionLabel>
                Andere abonnementen samen per maand
              </QuestionLabel>

              <MoneyInput
                value={costs.otherSubscriptions}
                onChange={(value) =>
                  setCosts((old) => ({
                    ...old,
                    otherSubscriptions: value,
                  }))
                }
                placeholder="Bijvoorbeeld 25"
              />
            </>
          )}

          <div className="mt-10 flex items-center justify-between border-t border-slate-100 pt-7">
            <button
              type="button"
              onClick={back}
              className="rounded-xl px-4 py-3 font-bold text-slate-500 transition hover:bg-slate-100"
            >
              ← Terug
            </button>

            <button
              type="button"
              onClick={next}
              className="rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              {step === steps.length - 1
                ? "Bekijk mijn resultaat →"
                : "Volgende →"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ResultScreen({
  costs,
  calculations,
  restart,
  goHome,
}: {
  costs: Costs;
  calculations: ResultCalculations;
  restart: () => void;
  goHome: () => void;
}) {
  const router = useRouter();

  const results = [
    {
      icon: "⚡",
      title: "Energie",
      priority: calculations.energyPriority,
      description: getEnergyDescription(costs),
      button: "Bekijk energiemogelijkheden",
      category: "energy",
    },
    {
      icon: "🌐",
      title: "Internet",
      priority: calculations.internetPriority,
      description: getInternetDescription(costs),
      button: "Vergelijk internet",
      category: "internet",
    },
    {
      icon: "📱",
      title: "Mobiel",
      priority: calculations.mobilePriority,
      description: getMobileDescription(costs),
      button:
        costs.mobileType === "Met toestel"
          ? "Bekijk mobiele mogelijkheden"
          : "Vergelijk sim-only",
      category: "mobile",
    },
    {
      icon: "📺",
      title: "Abonnementen",
      priority: calculations.subscriptionPriority,
      description: getSubscriptionDescription(costs),
      button: "Bekijk mijn abonnementen",
      category: "subscriptions",
    },
  ].sort((a, b) => b.priority - a.priority);

  const highest = results[0];

  return (
    <main className="min-h-screen bg-[#f7faf9] text-slate-950">
      <Header onLogo={goHome} />

      <section className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <div className="text-center">
          <Badge>✓ JOUW BESPAARRADAR IS KLAAR</Badge>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            Hier zou ik als eerste naar kijken.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We hebben je antwoorden geanalyseerd en de categorieën op volgorde
            gezet die voor jou het interessantst lijken om te controleren.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[32px] bg-slate-950 p-8 text-white">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-400">
              Jouw Radar-score
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span className="text-7xl font-black tracking-tight">
                {calculations.radarScore}
              </span>

              <span className="mb-2 text-xl font-bold text-slate-400">
                /100
              </span>
            </div>

            <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${calculations.radarScore}%` }}
              />
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              Deze score is geen geldbedrag. Hij geeft aan hoeveel signalen we
              in je antwoorden zien om je vaste lasten opnieuw te bekijken.
            </p>

            <div className="mt-7 rounded-2xl bg-white/5 p-5">
              <div className="text-sm font-bold text-slate-400">
                Interessante categorieën
              </div>

              <div className="mt-1 text-3xl font-black">
                {calculations.opportunities} van 4
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8">
            <div className="inline-flex rounded-full bg-white px-3 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
              #1 PRIORITEIT
            </div>

            <div className="mt-6 text-5xl">{highest.icon}</div>

            <h2 className="mt-4 text-3xl font-black">
              Begin met {highest.title.toLowerCase()}.
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Van de gegevens die je hebt ingevuld, krijgt{" "}
              {highest.title.toLowerCase()} momenteel de hoogste prioriteit om
              verder te controleren.
            </p>

            <button
              type="button"
              onClick={() => handleCompareClick(highest.category, costs, router)}
              className="mt-7 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-emerald-600"
            >
              {highest.button} →
            </button>

            <p className="mt-3 text-xs font-semibold text-slate-500">
              Live vergelijkingspartners worden binnenkort gekoppeld.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-5">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-emerald-600">
              JOUW RESULTATEN
            </div>

            <h2 className="mt-2 text-3xl font-black">
              Alle categorieën op volgorde
            </h2>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <ResultCard
                key={result.title}
                number={index + 1}
                icon={result.icon}
                title={result.title}
                priority={result.priority}
                description={result.description}
                buttonText={result.button}
                category={result.category}
                costs={costs}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-7 md:p-8">
          <div className="flex gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              🛡️
            </div>

            <div>
              <h3 className="font-black">Hoe betrouwbaar is dit resultaat?</h3>

              <p className="mt-2 leading-7 text-slate-600">
                BespaarRadar gebruikt je antwoorden op dit moment om te bepalen
                welke categorieën interessant zijn om verder te onderzoeken.
                We tonen bewust geen verzonnen gegarandeerde besparing. Zodra
                actuele vergelijkingspartners zijn aangesloten, kunnen de
                vergelijkknoppen je naar actuele aanbiedingen sturen.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={restart}
            className="flex-1 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-black transition hover:bg-slate-50"
          >
            ↻ Check opnieuw
          </button>

          <button
            type="button"
            onClick={goHome}
            className="flex-1 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white transition hover:bg-emerald-600"
          >
            Naar homepage
          </button>
        </div>

        <p className="mt-8 text-center text-xs leading-6 text-slate-400">
          BespaarRadar geeft een indicatie en is geen financieel advies.
          Werkelijke prijzen, voorwaarden en beschikbaarheid kunnen verschillen.
        </p>
      </section>
    </main>
  );
}

function ResultCard({
  number,
  icon,
  title,
  priority,
  description,
  buttonText,
  category,
  costs,
}: {
  number: number;
  icon: string;
  title: string;
  priority: number;
  description: string;
  buttonText: string;
  category: string;
  costs: Costs;
}) {
  const router = useRouter();
  const level = getPriorityLevel(priority);

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4 md:w-64">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
            {number}
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl">
            {icon}
          </div>

          <div>
            <h3 className="text-lg font-black">{title}</h3>

            <span
              className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-xs font-black ${level.className}`}
            >
              {level.label}
            </span>
          </div>
        </div>

        <p className="flex-1 leading-7 text-slate-600">{description}</p>

        <button
          type="button"
          onClick={() => handleCompareClick(category, costs, router)}
          className="shrink-0 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-600"
        >
          {buttonText} →
        </button>
      </div>
    </div>
  );
}

function getPriorityLevel(priority: number) {
  if (priority >= 5) {
    return {
      label: "Eerst bekijken",
      className: "bg-emerald-100 text-emerald-700",
    };
  }

  if (priority >= 3) {
    return {
      label: "Interessant",
      className: "bg-amber-100 text-amber-700",
    };
  }

  return {
    label: "Lage prioriteit",
    className: "bg-slate-100 text-slate-500",
  };
}

function getEnergyDescription(costs: Costs) {
  const price = costs.energy ? `€${costs.energy} per maand` : "een onbekend bedrag";

  const provider = costs.energyProvider
    ? ` bij ${costs.energyProvider}`
    : "";

  const contract = costs.energyContract
    ? ` Je hebt aangegeven dat je contracttype "${costs.energyContract}" is.`
    : "";

  return `Je betaalt ongeveer ${price}${provider}.${contract} Voor een echte vergelijking moeten we actuele tarieven en je werkelijke verbruik gebruiken.`;
}

function getInternetDescription(costs: Costs) {
  if (!costs.internet) {
    return "Je hebt geen maandbedrag ingevuld. Daardoor kunnen we hier nog geen sterk prijssignaal geven.";
  }

  const provider = costs.internetProvider
    ? ` bij ${costs.internetProvider}`
    : "";

  const packageText = costs.internetPackage
    ? ` voor ${costs.internetPackage.toLowerCase()}`
    : "";

  const contractText =
    costs.internetContract === "Contractvrij"
      ? " Je bent contractvrij, waardoor vergelijken extra interessant kan zijn."
      : costs.internetContract === "Bijna afgelopen"
      ? " Je contract loopt bijna af, dus dit kan een goed moment zijn om te vergelijken."
      : "";

  return `Je betaalt ongeveer €${costs.internet} per maand${provider}${packageText}.${contractText}`;
}

function getMobileDescription(costs: Costs) {
  if (!costs.mobile) {
    return "Je hebt geen maandbedrag ingevuld. Daardoor kunnen we hier nog geen sterk prijssignaal geven.";
  }

  const provider = costs.mobileProvider
    ? ` bij ${costs.mobileProvider}`
    : "";

  if (costs.mobileType === "Met toestel") {
    return `Je betaalt ongeveer €${costs.mobile} per maand${provider}. Een deel daarvan kan toestelbetaling zijn. Daarom vergelijken we dit niet rechtstreeks met een sim-only prijs.`;
  }

  const data = costs.mobileData
    ? ` met ${costs.mobileData.toLowerCase()} data`
    : "";

  const contractText =
    costs.mobileContract === "Contractvrij"
      ? " Je bent contractvrij, waardoor overstappen mogelijk interessant is."
      : costs.mobileContract === "Bijna afgelopen"
      ? " Je contract loopt bijna af, dus vergelijken kan binnenkort interessant zijn."
      : "";

  return `Je betaalt ongeveer €${costs.mobile} per maand${provider}${data}.${contractText}`;
}

function getSubscriptionDescription(costs: Costs) {
  const selected = [
    costs.netflix ? "Netflix" : "",
    costs.disney ? "Disney+" : "",
    costs.videoland ? "Videoland" : "",
    costs.spotify ? "Spotify" : "",
  ].filter(Boolean);

  if (selected.length === 0 && !costs.otherSubscriptions) {
    return "Je hebt geen abonnementen geselecteerd. Hier zien we daarom geen duidelijke aanleiding om verder te controleren.";
  }

  let text =
    selected.length > 0
      ? `Je gebruikt ${selected.join(", ")}.`
      : "Je hebt geen grote streamingdiensten geselecteerd.";

  if (costs.otherSubscriptions) {
    text += ` Daarnaast betaal je ongeveer €${costs.otherSubscriptions} per maand aan andere abonnementen.`;
  }

  text += " Controleer vooral of je alle diensten nog daadwerkelijk gebruikt.";

  return text;
}

function handleCompareClick(
  category: string,
  costs: Costs,
  router: ReturnType<typeof useRouter>
) {
  const routes: Record<string, string> = {
    energy: "/vergelijken/energie",
    internet: "/vergelijken/internet",
    mobile: "/vergelijken/sim-only",
    subscriptions: "/vergelijken/abonnementen",
  };

  const route = routes[category];

  if (route) {
    sessionStorage.setItem("bespaarradar-result", JSON.stringify(costs));
    router.push(route);
    return;
  }

  alert("Voor deze categorie is momenteel nog geen live vergelijker beschikbaar.");
}

function MoneyInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <div className="relative mt-3">
      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-xl font-black text-slate-500">
        €
      </span>

      <input
        type="number"
        min="0"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border-2 border-slate-200 py-5 pl-12 pr-20 text-xl font-black outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:border-emerald-500"
      />

      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-bold text-slate-400">
        p/m
      </span>
    </div>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="mt-3 w-full rounded-2xl border-2 border-slate-200 px-5 py-4 font-semibold outline-none transition placeholder:text-slate-300 focus:border-emerald-500"
    />
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 flex flex-wrap gap-3">{children}</div>;
}

function OptionButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border-2 px-5 py-3 font-bold transition ${
        active
          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

function QuestionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 text-sm font-black uppercase tracking-wide text-slate-700">
      {children}
    </div>
  );
}

function Toggle({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-2xl border-2 p-5 font-black transition ${
        active
          ? "border-emerald-500 bg-emerald-50 text-emerald-800"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
      }`}
    >
      {label}

      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full ${
          active
            ? "bg-emerald-500 text-white"
            : "bg-slate-100 text-slate-400"
        }`}
      >
        {active ? "✓" : "+"}
      </span>
    </button>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-black tracking-wider text-emerald-700">
      {children}
    </div>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-500">
      💡 {children}
    </div>
  );
}

function Info({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        ✓
      </span>

      {text}
    </div>
  );
}
