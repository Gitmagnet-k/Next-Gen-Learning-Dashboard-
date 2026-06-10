export default function ActivityCard() {
  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 xl:col-span-2">

      <h2 className="text-xl font-semibold mb-6">
        Learning Activity
      </h2>

      <div className="grid grid-cols-10 gap-2">

        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`
              h-4 w-4 rounded
              ${
                i % 4 === 0
                  ? "bg-green-500"
                  : i % 3 === 0
                  ? "bg-green-500/60"
                  : "bg-zinc-700"
              }
            `}
          />
        ))}

      </div>

    </section>
  );
}