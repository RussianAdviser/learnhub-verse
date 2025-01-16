import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  modules: number;
}

export const CourseCard = ({ id, title, description, modules }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{modules} modules</span>
          <Button 
            onClick={() => navigate(`/courses/${id}`)}
            className="bg-primary hover:bg-primary/90"
          >
            View Course
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};