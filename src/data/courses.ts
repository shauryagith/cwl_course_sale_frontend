export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  originalPrice?: number;
  isFree: boolean;
  thumbnail: string;
  duration: string;
  lessons: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  category: string;
}

// export const courses: Course[] = [
//   {
//     id: '1',
//     title: 'Web Development Fundamentals',
//     shortDescription: 'Master HTML, CSS, and JavaScript from scratch',
//     fullDescription: 'Start your journey into web development with this comprehensive course covering HTML5, CSS3, and modern JavaScript. Build real projects and gain the skills needed to create stunning websites. Perfect for absolute beginners who want to break into tech.',
//     price: 0,
//     isFree: true,
//     thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
//     duration: '8 hours',
//     lessons: 42,
//     level: 'Beginner',
//     instructor: 'Sarah Chen',
//     category: 'Development'
//   },
//   {
//     id: '2',
//     title: 'React Masterclass 2024',
//     shortDescription: 'Build modern web apps with React and TypeScript',
//     fullDescription: 'Take your frontend skills to the next level with React 18 and TypeScript. Learn hooks, state management, API integration, and deployment. This course includes 5 real-world projects that you can add to your portfolio.',
//     price: 79.99,
//     originalPrice: 159.99,
//     isFree: false,
//     thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
//     duration: '24 hours',
//     lessons: 156,
//     level: 'Intermediate',
//     instructor: 'Marcus Johnson',
//     category: 'Development'
//   },
//   {
//     id: '3',
//     title: 'UI/UX Design Essentials',
//     shortDescription: 'Create beautiful user interfaces that convert',
//     fullDescription: 'Learn the principles of great design and how to apply them in digital products. From wireframing to prototyping in Figma, this course covers everything you need to become a professional UI/UX designer.',
//     price: 49.99,
//     originalPrice: 99.99,
//     isFree: false,
//     thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
//     duration: '16 hours',
//     lessons: 89,
//     level: 'Beginner',
//     instructor: 'Emily Rodriguez',
//     category: 'Design'
//   },
//   {
//     id: '4',
//     title: 'Python for Data Science',
//     shortDescription: 'Analyze data and build ML models with Python',
//     fullDescription: 'Dive into the world of data science with Python. Learn pandas, numpy, matplotlib, and scikit-learn. Build predictive models and visualize insights from real datasets. No prior programming experience required.',
//     price: 0,
//     isFree: true,
//     thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
//     duration: '20 hours',
//     lessons: 98,
//     level: 'Intermediate',
//     instructor: 'Dr. Alex Park',
//     category: 'Data Science'
//   },
//   {
//     id: '5',
//     title: 'Digital Marketing Bootcamp',
//     shortDescription: 'Master SEO, social media, and paid advertising',
//     fullDescription: 'Learn how to grow businesses online with proven digital marketing strategies. Cover SEO, Google Ads, Facebook advertising, email marketing, and analytics. Real campaign examples and hands-on exercises included.',
//     price: 89.99,
//     originalPrice: 179.99,
//     isFree: false,
//     thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
//     duration: '18 hours',
//     lessons: 72,
//     level: 'Beginner',
//     instructor: 'Jordan Blake',
//     category: 'Marketing'
//   },
//   {
//     id: '6',
//     title: 'Mobile App Development',
//     shortDescription: 'Build iOS and Android apps with React Native',
//     fullDescription: 'Create cross-platform mobile applications using React Native. Learn to build, test, and deploy apps to both app stores. Includes authentication, notifications, and offline functionality modules.',
//     price: 99.99,
//     originalPrice: 199.99,
//     isFree: false,
//     thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
//     duration: '28 hours',
//     lessons: 134,
//     level: 'Advanced',
//     instructor: 'Lisa Wang',
//     category: 'Development'
//   }
// ];

// export const getCourseById = (id: string): Course | undefined => {
//   return courses.find(course => course.id === id);
// };
