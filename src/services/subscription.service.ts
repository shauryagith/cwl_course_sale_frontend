import api from "@/lib/api";

export const subscribeCourse = async (
  courseId: string,
  promoCode?: string
) => {
  const res = await api.post("/subscribe", {
    courseId,
    promoCode,
  });

  return res.data;
};


