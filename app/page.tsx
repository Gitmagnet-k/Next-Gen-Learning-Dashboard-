import Sidebar from "@/components/Sidebar";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";
import type { Course } from "@/types/course";
import type { SupabaseClient } from "@supabase/supabase-js";

export default async function Home() {
  const res = await (supabase as SupabaseClient).from<Course>("Courses").select("*");
  const courses: Course[] | null = res?.data ?? null;

  const error = res?.error ?? null;

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        {error.message}
      </div>
    );
  }

  const courseItems = courses?.map((course: Course, index: number) => (
    <CourseCard key={index} title={course.title} progress={course.progress} />
  ));

  return (
    <main className="min-h-screen bg-[#09090b] text-white flex">
      <Sidebar />

      <section className="flex-1 p-6 md:p-8">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[220px]">

          <HeroCard />

          {courseItems}

          <ActivityCard />

        </div>
      </section>
    </main>
  );
}