export default function HeroCard() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 xl:col-span-2">

      <div className="absolute -top-10 -right-10 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

      <h1 className="text-4xl font-bold">
        Welcome Back Kumkum 👋
      </h1>

      <p className="mt-3 text-zinc-400">
        Keep learning and maintain your streak.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <div className="rounded-full bg-orange-500/20 px-4 py-2 text-orange-300">
          🔥 12 Day Streak
        </div>

        <div className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300">
          📚 4 Courses
        </div>

        <div className="rounded-full bg-green-500/20 px-4 py-2 text-green-300">
          ⭐ 87% Score
        </div>

      </div>
    </section>
  );
}