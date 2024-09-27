import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Video, FileText } from "lucide-react";
import { ReactElement } from "react";

interface LessonCardProps {
  title: string;
  icon: ReactElement;
  description: string;
  duration: number;
  type: "video" | "reading" | "interactive";
  difficulty?: "beginner" | "intermediate" | "advanced";
  progress?: number;
  onStart?: () => void;
}

export default function LessonCard({
  title,
  icon,
  description,
  duration,
  type,
  difficulty,
  progress,
  onStart,
}: LessonCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "video":
        return <Video className="h-5 w-5" />;
      case "reading":
        return <FileText className="h-5 w-5" />;
      case "interactive":
        return <BookOpen className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-center space-x-4">
          {icon}
          <div className="flex w-full flex-col justify-between">
            <div className="flex w-full items-start justify-between">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              {difficulty && (
                <Badge className={getDifficultyColor()}>{difficulty}</Badge>
              )}
            </div>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            {getTypeIcon()}
            <span className="ml-1 capitalize">{type}</span>
          </div>
        </div>
        {progress !== undefined && (
          <div className="mt-4">
            <div className="mb-1 flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-gray-200">
              <div
                className="h-2.5 rounded-full bg-blue-600"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={onStart} className="w-full rounded-lg bg-sky_blue">
          {progress ? "Continue" : "Start"} Lesson
        </Button>
      </CardFooter>
    </Card>
  );
}
