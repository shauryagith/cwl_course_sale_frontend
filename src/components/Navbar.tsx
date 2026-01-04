import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { isAuthenticated, logout, getUser } from "@/utils/storage";
import { BookOpen, User, LogOut, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authenticated = isAuthenticated();
  const user = getUser();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-gold rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gradient-gold">
                LearnHub
              </span>
              <span className="text-[10px] font-semibold text-destructive tracking-wider">
                BLACK FRIDAY
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm font-medium ${
                isActive("/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Courses
            </Link>

            {authenticated && (
              <Link
                to="/my-courses"
                className={`text-sm font-medium ${
                  isActive("/my-courses")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                My Courses
              </Link>
            )}
          </div>

          {/* Auth Section */}
          <div className="flex items-center gap-3">
            {authenticated ? (
              <>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">
                    {user?.name || "User"}
                  </span>
                </div>

                <Link to="/my-courses" className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <BookOpen className="w-5 h-5" />
                  </Button>
                </Link>

                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="w-5 h-5" />
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button size="sm">Get Started</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
