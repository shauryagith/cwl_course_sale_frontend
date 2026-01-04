import { Course } from "@/data/courses";

export const mapApiCourseToUICourse = (apiCourse: any): Course => {
  const isFree = apiCourse.price === 0;

  return {
    id: apiCourse._id,
    title: apiCourse.title,
    shortDescription: apiCourse.description.slice(0, 80) + "...",
    fullDescription: apiCourse.description,
    price: apiCourse.price,
    originalPrice: isFree ? undefined : apiCourse.price * 2,
    isFree,
    category: "Web Development",
    level: "Beginner",
    duration: "12h 30m",
    lessons: 24,
    instructor: "Industry Expert",
    thumbnail:
      apiCourse.image ||
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  };
};
