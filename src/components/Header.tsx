import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-gradient-to-r from-[#243949] to-[#517fa4] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 
          onClick={() => navigate("/")} 
          className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
        >
          STUDY-DO
        </h1>
        <nav className="flex gap-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/courses")}
            className="text-white hover:text-white hover:bg-white/20"
          >
            Courses
          </Button>
          <Button 
            variant="ghost"
            onClick={() => navigate("/dashboard")}
            className="text-white hover:text-white hover:bg-white/20"
          >
            Dashboard
          </Button>
        </nav>
      </div>
    </header>
  );
};