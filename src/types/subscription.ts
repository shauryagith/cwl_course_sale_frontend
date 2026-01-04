export interface Subscription {
  courseId: string;
  courseTitle: string;
  thumbnail: string;
  pricePaid: number;
  originalPrice: number;
  subscribedAt: string;
  promoCodeUsed?: string;
}

export interface User {
  email: string;
  name?: string;
  token?: string;
}
