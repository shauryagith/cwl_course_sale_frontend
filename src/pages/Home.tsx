import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CourseCard from "@/components/CourseCard";
import { getCourses } from "@/services/course.service";
import { Sparkles, Zap, Clock, Tag, Loader2 } from "lucide-react";
import { toast } from "sonner";

/* ================= TYPES ================= */
interface Course {
  _id: string;
  title: string;
  price: number;
  image?: string;
  shortDescription?: string;
}

const Home = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();

        // ✅ HARD SAFETY CHECK
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setCourses([]);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load courses");
        setCourses([]); // ✅ SAFETY
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto relative">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30 text-destructive">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">
                BLACK FRIDAY SALE - UP TO 50% OFF
              </span>
              <Zap className="w-4 h-4" />
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Level Up Your Skills</span>
              <br />
              <span className="text-gradient-gold">This Black Friday</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8">
              Access premium courses from industry experts at unbeatable prices.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
              <Stat icon={<Sparkles className="w-5 h-5 text-primary" />} value="500+" label="Hours of Content" />
              <Stat icon={<Clock className="w-5 h-5 text-primary" />} value="48hrs" label="Sale Ends" />
              <Stat icon={<Tag className="w-5 h-5 text-primary" />} value="50%" label="Max Discount" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= COURSES GRID ================= */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <p className="text-muted-foreground mt-1">
                Hand-picked courses on sale
              </p>
            </div>

            {!loading && (
              <span className="text-sm font-medium text-primary">
                {courses.length} Courses Available
              </span>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : courses.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No courses available
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard
                  key={course._id}
                  course={course}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= PROMO CTA SECTION ================= */}
<section className="py-20 px-4">
  <div className="container mx-auto">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f0f0f] via-[#1a1405] to-[#0f0f0f] border border-yellow-500/20 shadow-xl">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,215,0,0.15),_transparent_60%)]" />

      <div className="relative z-10 text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Don&apos;t Miss Out!
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Use promo code{" "}
          <span className="text-yellow-400 font-semibold">
            BFSALE25
          </span>{" "}
          at checkout for{" "}
          <span className="text-yellow-400 font-semibold">
            50% off
          </span>{" "}
          all paid courses
        </p>

        <div className="flex justify-center">
          <div className="px-8 py-4 rounded-xl bg-black/60 border border-yellow-400/40 text-yellow-400 font-bold text-xl tracking-widest shadow-md">
            BFSALE25
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ================= FOOTER ================= */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 LearnHub. Black Friday Demo App. All rights reserved.
            <br />
            Designed by @Shreyash Srivastav.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* ================= STAT COMPONENT ================= */
const Stat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default Home;
