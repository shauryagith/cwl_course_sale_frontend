import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import Index from "@/pages/Index";
import Auth from "@/pages/Auth";
import CourseDetail from "@/pages/CourseDetail";
import MyCourses from "@/pages/MyCourses";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "hsl(0 0% 8%)",
              border: "1px solid hsl(0 0% 18%)",
              color: "hsl(45 10% 95%)",
            },
          }}
        />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/course/:id" element={<CourseDetail />} />
            <Route
              path="/my-courses"
              element={
                <ProtectedRoute>
                  <MyCourses />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
