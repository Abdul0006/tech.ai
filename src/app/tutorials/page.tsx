// src/app/tutorials/page.tsx
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Course = {
  id: number;
  title: string;
  description: string;
  youtube_id: string;
};

const TutorialsPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data, error } = await supabase.from("courses").select("*");
      if (!error) setCourses(data as Course[]);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Tutorials</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : courses.length === 0 ? (
        <p className="text-center">No tutorials available yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded shadow p-4"
            >
              <iframe
                className="w-full h-48 rounded"
                src={`https://www.youtube.com/embed/${course.youtube_id}`}
                title={course.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h2 className="text-xl font-semibold mt-4">{course.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{course.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorialsPage;
