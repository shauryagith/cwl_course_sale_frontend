import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { getMyCourses } from "@/services/myCourses.service";
import { format } from "date-fns";
import {
  BookOpen,
  Calendar,
  Tag,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

interface MyCourse {
  _id: string;
  course: {
    _id: string;
    title: string;
    description: string;
    price: number;
    image?: string;
  } | null; // ✅ IMPORTANT
  pricePaid: number;
  subscribedAt: string;
}

const FALLBACK_IMAGE = "/placeholder.svg";

const MyCourses = () => {
  const [courses, setCourses] = useState<MyCourse[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getMyCourses();
        setCourses(Array.isArray(data) ? data : []);
      } catch {
        toast.error("Failed to load courses");
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold mb-6">My Courses</h1>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : courses.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <BookOpen className="mx-auto mb-4 w-10 h-10 text-primary" />
              <p className="mb-6">No courses yet</p>
              <Link to="/">
                <Button>
                  Browse Courses <ArrowRight />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {courses
                .filter((c) => c.course) /* ✅ REMOVE BROKEN ENTRIES */
                .map((c) => (
                  <div
                    key={c._id}
                    className="glass-card p-4 flex gap-4 items-center"
                  >
                    {/* IMAGE (100% SAFE) */}
                    <img
                      src={
                        c.course?.image?.trim()
                          ? c.course.image
                          : FALLBACK_IMAGE
                      }
                      alt={c.course?.title || "Course"}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          FALLBACK_IMAGE;
                      }}
                      className="w-40 h-28 object-cover rounded-lg shrink-0"
                    />

                    {/* CONTENT */}
                    <div className="flex-1">
                      <h3 className="font-bold">
                        {c.course?.title || "Course unavailable"}
                      </h3>

                      <div className="text-sm text-muted-foreground flex gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {format(
                            new Date(c.subscribedAt),
                            "MMM d, yyyy"
                          )}
                        </span>

                        <span className="flex items-center gap-1">
                          <Tag className="w-4 h-4" />
                          {c.pricePaid === 0
                            ? "Free"
                            : `₹${c.pricePaid}`}
                        </span>
                      </div>

                      {c.course &&
                        c.course.price > c.pricePaid && (
                          <div className="text-xs text-primary mt-1">
                            <Sparkles className="inline w-3 h-3" /> Saved ₹
                            {c.course.price - c.pricePaid}
                          </div>
                        )}
                    </div>

                    {c.course && (
                      <Link to={`/course/${c.course._id}`}>
                        <Button variant="outline">View</Button>
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
