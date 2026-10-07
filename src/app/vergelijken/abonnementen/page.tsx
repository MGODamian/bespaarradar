import BackButton from "@/components/BackButton";

export default function AbonnementenVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <div className="mt-8 rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-4 text-4xl">📺</div>

          <h1 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Abonnementen besparen
          </h1>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Bekijk welke abonnementen je gebruikt en controleer of er kosten
            tussen zitten waarop je mogelijk kunt besparen.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h2 className="text-lg font-black text-slate-950">
              Begin met deze controle
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                "Netflix",
                "Disney+",
                "Videoland",
                "Spotify",
                "Sportabonnementen",
                "Overige abonnementen",
              ].map((name) => (
                <div
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white px-4 py-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                    ✓
                  </span>

                  <span className="font-bold text-slate-800">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-50 p-6">
            <h2 className="font-black text-slate-950">
              Waar kun je op letten?
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Controleer vooral abonnementen die je nauwelijks gebruikt,
              diensten met vergelijkbare functies en abonnementen waarvan de
              prijs ongemerkt is gestegen. Opzeggen is niet altijd de beste
              keuze; bepaal eerst welke diensten je daadwerkelijk gebruikt.
            </p>
          </div>

          <p className="mt-6 text-xs leading-5 text-slate-500">
            BespaarRadar geeft alleen een indicatie van waar het interessant kan
            zijn om je uitgaven opnieuw te bekijken. Er wordt geen gegarandeerde
            besparing berekend.
          </p>
        </div>
      </div>
    </main>
  );
}
