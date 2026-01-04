import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, BarChart3, Tag } from "lucide-react";

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

interface CourseCardProps {
  course: Course;
  index?: number;
}

const CourseCard = ({ course, index = 0 }: CourseCardProps) => {
  const isFree = course.price === 0;

  return (
    <div
      className="group glass-card rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          {isFree ? (
            <span className="px-3 py-1 text-xs font-bold bg-success text-foreground rounded-full">
              FREE
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-bold bg-gradient-gold text-primary-foreground rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              SALE
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {course.description}
          </p>
        </div>

        {/* Stats (static for now, real apps fetch separately) */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Self-paced</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lifetime access</span>
          </div>
          <div className="flex items-center gap-1">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Beginner friendly</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-xl font-bold text-gradient-gold">
            {isFree ? "Free" : `₹${course.price}`}
          </span>

          <Link to={`/course/${course._id}`}>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
