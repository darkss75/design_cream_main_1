
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "전체 시공",
    description:
      "바닥, 벽, 천장, 주방, 욕실 등 주거 공간 전체를 새롭게 디자인하고 시공합니다.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2069",
  },
  {
    id: 2,
    title: "부분 리모델링",
    description:
      "주방, 거실, 욕실 등 특정 공간만을 집중적으로 개선하는 맞춤형 리모델링 서비스입니다.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
  },
  {
    id: 3,
    title: "인테리어 컨설팅",
    description:
      "전문가의 시선으로 현재 공간을 분석하고, 개선 방향과 스타일링 아이디어를 제안합니다.",
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832",
  },
];

const ServicesHighlight = () => {
  return (
    <section className="bg-cream-light section-padding">
      <div className="container-custom">
        <h2 className="section-title">서비스 안내</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          18년 경험의 전문가가 직접 현장을 관리하며 완벽한 인테리어 서비스를 제공합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-medium mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <NavLink
                  to="/services"
                  className="text-gold hover:text-gold-dark inline-flex items-center gap-1 font-medium"
                >
                  자세히 보기 <ArrowRight size={16} />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
