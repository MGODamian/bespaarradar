import BackButton from "@/components/BackButton";

export default function EnergieVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <div className="mt-8 rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-4 text-4xl">⚡</div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            Energie vergelijken
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Vergelijk actuele energieaanbiedingen en ontdek welk aanbod bij jouw
            situatie past.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-green-300 bg-green-50 p-8 text-center">
            <p className="font-semibold text-gray-900">
              Energievergelijker wordt gekoppeld
            </p>
            <p className="mt-2 text-sm text-gray-600">
              De actuele Daisycon-energievergelijker komt hier te staan.
            </p>
          </div>

          <p className="mt-6 text-xs leading-5 text-gray-500">
            BespaarRadar kan een vergoeding ontvangen wanneer je via de
            vergelijker overstapt. Dit kost jou niets extra.
          </p>
        </div>
      </div>
    </main>
  );
}
