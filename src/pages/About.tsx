
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream-light py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">회사소개</h1>
            <p className="text-xl text-muted-foreground">
              15년의 경험으로 쌓아온 디자인크림의 철학과 가치를 소개합니다
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-subtitle mb-6">
                <span className="text-gold">DESIGN CREAM</span>의 비전
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                디자인크림은 인테리어를 단순한 공간 꾸미기를 넘어, 고객의 삶과 직접 맞닿아 있는
                공간 디자인을 추구합니다. 우리는 고객이 일상에서 느끼는 감정과 필요에 집중하여
                기능적이면서도 아름다운 공간을 창조합니다.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 my-6 italic text-muted-foreground">
                "시공자는 그 집에서 며칠 동안만 있는 거지만, 고객님은 10년을 살 수도 있는 거예요.
                우리가 조금 더 고생하면 거주자는 10년 동안 편히 살 수 있는 거죠."
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                이러한 철학으로 디자인크림은 눈에 보이지 않는 부분까지 꼼꼼하게 시공하여
                하자를 최소화하고, 각 공정별로 충분한 시간을 배정하여 완벽한 시공을 추구합니다.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                  alt="인테리어 디자인 철학"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold p-4 text-white rounded-lg shadow-lg max-w-[200px]">
                <p className="font-serif italic">
                  "정직한 견적과 완벽한 시공으로 신뢰를 쌓아갑니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Introduction */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=987"
                  alt="나경화 대표"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-[200px]">
                <p className="font-serif text-gold text-lg">나경화 대표</p>
                <p className="text-sm text-muted-foreground">
                  15년 인테리어 전문가
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="section-subtitle mb-6">
                대표 <span className="text-gold">소개</span>
              </h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                디자인크림의 나경화 대표는 LG에서의 근무 경험과 인테리어 전문 잡지사에서 
                인테리어 코디네이터로 3년간 일한 후 직접 인테리어 사업을 시작했습니다.
              </p>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                15년간 쌓아온 풍부한 경험을 바탕으로, 고객의 니즈를 정확히 파악하고 
                이를 실현시키는 능력을 갖추고 있습니다. 특히 초기 미팅에서 고객의 색상 취향을
                파악하는 것부터 시작하여, 공간의 구조와 용도에 맞는 최적의 디자인을 제안합니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                나경화 대표는 모든 현장을 직접 관리하며, 고객과 긴밀한 소통을 통해
                최상의 결과물을 만들어내는 것을 최우선 가치로 삼고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">디자인 접근 방식</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-lg mb-12 text-muted-foreground">
              디자인크림은 고객 중심의 디자인 프로세스를 통해 만족스러운 결과물을 만들어냅니다.
            </p>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-3">고객 색상 취향 파악</h3>
                  <p className="text-muted-foreground">
                    초기 미팅에서 고객의 색상 선호도를 세밀하게 파악합니다. 이는 디자인 방향을
                    결정하는 중요한 시작점이 됩니다.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-3">라이프스타일 분석</h3>
                  <p className="text-muted-foreground">
                    고객의 생활 패턴, 취미, 가족 구성 등을 종합적으로 분석하여
                    일상생활에 최적화된 공간을 계획합니다.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-3">디테일에 집중</h3>
                  <p className="text-muted-foreground">
                    눈에 보이지 않는 부분까지 꼼꼼하게 계획하고 시공하여 내구성과 
                    기능성을 모두 갖춘 공간을 만듭니다.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-gold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  <span className="text-white font-medium">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-3">정직한 견적과 투명한 진행</h3>
                  <p className="text-muted-foreground">
                    계약 후 추가 비용이 발생하지 않도록 처음부터 정확하고 정직한 견적을 제공하고,
                    모든 공정 과정을 투명하게 공유합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold-dark py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            디자인크림과 함께 당신의 공간을 변화시키세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            15년의 노하우로 완성되는 특별한 공간 디자인을 경험하세요.
            지금 바로 무료 상담을 신청하고 새로운 시작을 준비하세요.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-gold-dark hover:bg-white/90"
          >
            <NavLink to="/contact" className="flex items-center gap-2">
              무료 상담 신청하기 <ArrowRight size={16} />
            </NavLink>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
