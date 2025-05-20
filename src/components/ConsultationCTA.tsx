
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ConsultationCTA = () => {
  return (
    <section className="bg-gold-dark py-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            당신의 이상적인 공간을 함께 만들어보세요
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            15년 경력의 나경화 대표가 직접 상담해드립니다.
            지금 무료 상담을 신청하고 새로운 공간의 시작을 준비하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-gold-dark hover:bg-white/90"
            >
              <NavLink to="/contact">무료 상담 신청</NavLink>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              <NavLink to="/contact">연락처 보기</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
