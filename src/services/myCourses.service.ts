import api from "@/lib/api";
import { getToken } from "@/utils/storage";

export const getMyCourses = async () => {
  const token = getToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  const res = await api.get("/courses/user/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};



