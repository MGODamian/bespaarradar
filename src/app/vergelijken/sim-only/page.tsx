import BackButton from "@/components/BackButton";

export default function SimOnlyVergelijkenPage() {
  return (
    <main className="min-h-screen bg-[#f7faf7] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <BackButton />

        <div className="mt-8 rounded-3xl border border-green-100 bg-white p-8 shadow-sm md:p-12">
          <div className="mb-4 text-4xl">📱</div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            Sim-only vergelijken
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Vergelijk actuele sim-only aanbiedingen op prijs, data, minuten en
            provider.
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-green-300 bg-green-50 p-8 text-center">
            <p className="font-semibold text-gray-900">
              Sim-only-vergelijker wordt gekoppeld
            </p>
            <p className="mt-2 text-sm text-gray-600">
              De actuele Daisycon Sim-only-vergelijker komt hier te staan.
            </p>
          </div>

          <p className="mt-6 text-xs leading-5 text-gray-500">
            BespaarRadar kan een vergoeding ontvangen wanneer je via de
            vergelijker een abonnement afsluit. Dit kost jou niets extra.
          </p>
        </div>
      </div>
    </main>
  );
}
