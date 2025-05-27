
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="bg-cream section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-subtitle mb-6">
              <span className="text-gold">DESIGN CREAM</span>
            </h2>
            <h3 className="text-3xl font-serif mb-6">
              인테리어를 넘어 사람 자체와 맞닿은 공간 디자인
            </h3>
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              디자인크림은 18년간의 인테리어 전문 경험을 바탕으로 고객님의 삶과 공간을 아름답게 연결합니다. 
              나경화 대표는 LG 근무 경력과 인테리어 전문지 코디네이터로서의 경험을 토대로,
              고객의 라이프스타일을 정확히 파악하고 이에 맞는 최적의 디자인을 제안합니다.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 my-6 italic text-muted-foreground">
              "시공자는 그 집에서 며칠 동안만 있는 거지만, 고객님은 10년을 살 수도 있는 거예요. 
              우리가 조금 더 고생하면 거주자는 10년 동안 편히 살 수 있는 거죠."
            </blockquote>
            <Button asChild variant="outline" className="mt-4 border-gold text-gold hover:bg-gold/5">
              <NavLink to="/about" className="flex items-center gap-2">
                더 알아보기 <ArrowRight size={16} />
              </NavLink>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/about/528.jpg"
                alt="인테리어 작업 모습"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
