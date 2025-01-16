import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";

const MOCK_COURSES = [
  {
    id: "1",
    title: "Introduction to Mathematics",
    description: "Learn the fundamentals of mathematics with our comprehensive course.",
    modules: 8
  },
  {
    id: "2",
    title: "Basic Physics",
    description: "Understand the basic principles of physics through practical examples.",
    modules: 6
  },
  {
    id: "3",
    title: "English Grammar",
    description: "Master English grammar with interactive lessons and exercises.",
    modules: 10
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_COURSES.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Courses;