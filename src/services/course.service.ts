import api from "@/lib/api";

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
}

export const getCourses = async (): Promise<Course[]> => {
  const res = await api.get("/courses");
  return res.data;
};

export const getCourseById = async (id: string): Promise<Course> => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};
