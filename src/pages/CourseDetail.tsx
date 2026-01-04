import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

import { getCourseById } from "@/services/course.service";
import { subscribeCourse } from "@/services/subscription.service";
import { getMyCourses } from "@/services/myCourses.service";
import { isAuthenticated } from "@/utils/storage";

import {
  ArrowLeft,
  Loader2,
  Sparkles,
  CheckCircle2,
  Clock,
  BookOpen,
  BarChart3,
  User,
  Tag,
} from "lucide-react";

const DISCOUNT = 0.5;
const FALLBACK_IMAGE = "/placeholder.svg";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  /* ================= FETCH ================= */
  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        const data = await getCourseById(id);
        if (!data) throw new Error();

        setCourse(data);

        if (isAuthenticated()) {
          const myCourses = await getMyCourses();
          const found = Array.isArray(myCourses)
            ? myCourses.some((c: any) => c.course?._id === id)
            : false;

          setSubscribed(found);
        }
      } catch {
        toast.error("Failed to load course");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Link to="/">
          <Button>Back to Courses</Button>
        </Link>
      </div>
    );
  }

  /* ================= PRICE ================= */
  const isFree = course.price === 0;
  const finalPrice = promoApplied
    ? Math.round(course.price * (1 - DISCOUNT))
    : course.price;

  /* ================= ACTIONS ================= */
  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === "BFSALE25") {
      setPromoApplied(true);
      toast.success("🎉 50% discount applied!");
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handleSubscribe = async () => {
    if (!isAuthenticated()) {
      toast.error("Please login first");
      navigate("/auth");
      return;
    }

    try {
      setSubscribing(true);
      await subscribeCourse(course._id, isFree ? undefined : promoCode);
      toast.success("Subscribed successfully 🚀");
      navigate("/my-courses");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Subscription failed");
    } finally {
      setSubscribing(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* ================= LEFT CONTENT ================= */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={course.image?.trim() ? course.image : FALLBACK_IMAGE}
                  onError={(e) =>
                    ((e.currentTarget as HTMLImageElement).src =
                      FALLBACK_IMAGE)
                  }
                  className="h-80 w-full object-cover"
                />

                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/80 text-gold px-4 py-2 rounded-full text-sm">
                  <Tag className="w-4 h-4" />
                  BLACK FRIDAY SALE
                </div>
              </div>

              {/* Title */}
              <div>
                <p className="text-gold font-medium mb-2">
                  {course.category || "Development"}
                </p>
                <h1 className="text-4xl font-bold mb-4">
                  {course.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {course.instructor || "Expert Instructor"}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration || "18 hours"}
                  </span>
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {course.lessons || 72} lessons
                  </span>
                  <span className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    {course.level || "Beginner"}
                  </span>
                </div>
              </div>

              {/* About */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-3">
                  About This Course
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* What You'll Learn */}
              <div className="glass-card rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">
                  What You'll Learn
                </h2>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Build real-world projects",
                    "Master core concepts",
                    "Hands-on exercises",
                    "Industry best practices",
                    "Lifetime access",
                    "Certificate of completion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-success" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDEBAR ================= */}
            <div className="glass-card rounded-2xl p-6 space-y-6 sticky top-28 h-fit">
              <div className="text-center">
                {isFree ? (
                  <div className="flex justify-center gap-2 text-success">
                    <Sparkles />
                    <span className="text-3xl font-bold">Free</span>
                  </div>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-gold">
                      ₹{finalPrice}
                    </span>
                    {promoApplied && (
                      <p className="line-through text-muted-foreground">
                        ₹{course.price}
                      </p>
                    )}
                    {promoApplied && (
                      <p className="text-success text-sm mt-1">
                        Save ₹{course.price - finalPrice}!
                      </p>
                    )}
                  </>
                )}
              </div>

              {!subscribed && !isFree && (
                <>
                  <p className="text-sm text-muted-foreground">
                    Have a promo code?
                  </p>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                    />
                    <Button
                      variant="outline"
                      onClick={handleApplyPromo}
                      disabled={!promoCode || promoApplied}
                    >
                      Apply
                    </Button>
                  </div>

                  {!promoApplied && (
                    <Button
                      variant="secondary"
                      className="w-full"
                      disabled
                    >
                      Apply Promo Code First
                    </Button>
                  )}

                  <p className="text-xs text-muted-foreground text-center">
                    💡 Hint: Try using code{" "}
                    <span className="font-semibold">BFSALE25</span>
                  </p>
                </>
              )}

              {subscribed ? (
                <>
                  <div className="flex justify-center gap-2 text-success">
                    <CheckCircle2 /> Enrolled
                  </div>
                  <Link to="/my-courses">
                    <Button className="w-full">Go to My Courses</Button>
                  </Link>
                </>
              ) : (
                <Button
                  className="w-full"
                  disabled={subscribing || (!isFree && !promoApplied)}
                  onClick={handleSubscribe}
                >
                  {subscribing ? (
                    <Loader2 className="animate-spin" />
                  ) : isFree ? (
                    "Subscribe for Free"
                  ) : (
                    `Subscribe for ₹${finalPrice}`
                  )}
                </Button>
              )}

              <div className="pt-4 border-t space-y-2 text-sm">
                <p className="font-semibold">This course includes:</p>
                <p>✔ {course.duration || "18 hours"} of content</p>
                <p>✔ {course.lessons || 72} lessons</p>
                <p>✔ Lifetime access</p>
                <p>✔ Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
