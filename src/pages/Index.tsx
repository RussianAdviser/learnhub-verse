import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#243949] to-[#517fa4] bg-clip-text text-transparent">
            Welcome to STUDY-DO
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            An innovative platform where tutors can create engaging courses and students can learn effectively.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/courses")}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              Browse Courses
            </Button>
            <Button
              onClick={() => navigate("/dashboard")}
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;