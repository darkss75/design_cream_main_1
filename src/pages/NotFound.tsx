
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream py-20">
      <div className="container-custom">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-8xl font-serif text-gold font-bold mb-6">404</h1>
          <p className="text-3xl font-serif mb-4">페이지를 찾을 수 없습니다</p>
          <p className="text-muted-foreground mb-8">
            요청하신 페이지가 존재하지 않거나 다른 주소로 변경되었습니다.
            홈페이지로 이동하여 필요한 정보를 찾아보세요.
          </p>
          <Button asChild className="bg-gold hover:bg-gold-dark text-white">
            <NavLink to="/" className="flex items-center gap-2">
              홈페이지로 돌아가기 <ArrowRight size={16} />
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
