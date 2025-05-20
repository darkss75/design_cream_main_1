
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const servicesList = [
  {
    id: 1,
    title: "전체 시공",
    description:
      "바닥, 벽, 천장, 주방, 욕실 등 주거 공간 전체를 새롭게 디자인하고 시공합니다. 고객의 라이프스타일과 취향을 정확히 반영하여 모든 공간을 조화롭게 연결합니다.",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2069",
    features: [
      "공간 전체의 디자인 컨셉 기획 및 설계",
      "바닥재, 벽지, 조명 등 모든 마감재 시공",
      "주방, 욕실 전체 리모델링",
      "수납공간 맞춤 설계",
      "전기, 설비 시스템 교체 및 개선",
    ],
  },
  {
    id: 2,
    title: "부분 리모델링",
    description:
      "주방, 거실, 욕실 등 특정 공간만을 집중적으로 개선하는 맞춤형 리모델링 서비스입니다. 기존 공간의 장점은 유지하면서 필요한 부분만 효율적으로 변화시킵니다.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    features: [
      "주방 리모델링 (싱크대, 가전 배치 최적화)",
      "욕실 리모델링 (방수, 타일, 위생기구)",
      "거실 개선 (벽면, 조명, 수납공간)",
      "침실 리뉴얼 (벽지, 바닥재, 붙박이장)",
      "발코니 확장 및 인테리어",
    ],
  },
  {
    id: 3,
    title: "인테리어 컨설팅",
    description:
      "전문가의 시선으로 현재 공간을 분석하고, 개선 방향과 스타일링 아이디어를 제안합니다. 자신의 공간을 어떻게 꾸며야 할지 고민되는 분들에게 최적의 솔루션을 제공합니다.",
    image: "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832",
    features: [
      "공간 분석 및 문제점 진단",
      "디자인 방향성 제안",
      "가구 배치 및 스타일링 조언",
      "컬러 팔레트 추천",
      "예산에 맞는 개선 우선순위 설정",
    ],
  },
];

const processList = [
  {
    title: "초기 미팅",
    description: "고객의 니즈와 예산, 색상 취향을 파악합니다.",
    icon: "📋",
  },
  {
    title: "디자인 제안",
    description: "고객 요구사항을 반영한 디자인 컨셉을 제안합니다.",
    icon: "✏️",
  },
  {
    title: "견적 및 계약",
    description: "투명한 견적을 제공하고 계약을 진행합니다.",
    icon: "📝",
  },
  {
    title: "공정별 시공 계획",
    description: "체계적인 공정 계획으로 효율적인 시공을 준비합니다.",
    icon: "🔧",
  },
  {
    title: "시공 진행",
    description: "각 공정별 충분한 시간을 두고 꼼꼼하게 시공합니다.",
    icon: "🏗️",
  },
  {
    title: "품질 검수",
    description: "완공 전 고객과 함께 품질을 꼼꼼히 체크합니다.",
    icon: "🔍",
  },
  {
    title: "완공 및 AS",
    description: "완공 후에도 책임감 있는 AS 서비스를 제공합니다.",
    icon: "🏠",
  },
];

const faqList = [
  {
    question: "인테리어 공사 기간은 얼마나 소요되나요?",
    answer:
      "공사 범위와 규모에 따라 다르지만, 일반적으로 아파트 전체 시공의 경우 약 4-6주, 부분 리모델링은 2-3주 정도 소요됩니다. 정확한 일정은 초기 상담 시 자세히 안내해 드립니다.",
  },
  {
    question: "견적은 어떻게 산출되나요?",
    answer:
      "현장 방문을 통해 정확한 치수 측정과 고객님의 요구사항을 반영하여 견적을 산출합니다. 디자인크림은 계약 후 추가 비용이 발생하지 않도록 초기 견적에 모든 항목을 투명하게 포함시킵니다.",
  },
  {
    question: "공사 중에 변경사항이 생기면 어떻게 되나요?",
    answer:
      "공사 중 변경사항은 담당 디자이너와 상담 후 반영 여부를 결정합니다. 변경으로 인한 추가 비용이나 공기 연장이 필요한 경우, 사전에 충분히 설명드리고 동의를 구한 후 진행합니다.",
  },
  {
    question: "하자 보수는 어떻게 이루어지나요?",
    answer:
      "완공 후 1년간 무상 하자 보수를 제공합니다. 시공 과정에서 발생할 수 있는 모든 하자에 대해 책임지고 신속하게 처리해 드립니다.",
  },
  {
    question: "인테리어 상담은 어떻게 신청하나요?",
    answer:
      "웹사이트 문의/연락처 페이지를 통해 상담 신청이 가능합니다. 전화나 이메일로도 문의 주시면 빠르게 답변 드리고, 무료 현장 방문 상담을 진행합니다.",
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream-light py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">서비스 안내</h1>
            <p className="text-xl text-muted-foreground">
              디자인크림이 제공하는 전문적인 인테리어 서비스를 소개합니다
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              고객의 <span className="text-gold">라이프스타일</span>에 맞춘 맞춤형 서비스
            </h2>
            <p className="text-lg text-muted-foreground">
              디자인크림은 15년의 경험을 바탕으로 고객님의 니즈에 완벽하게 부합하는 
              다양한 인테리어 서비스를 제공합니다. 전체 시공부터 부분 리모델링, 전문적인 
              컨설팅까지, 고객님의 공간을 위한 최상의 솔루션을 찾아드립니다.
            </p>
          </div>

          <div className="space-y-24">
            {servicesList.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="text-2xl md:text-3xl font-serif mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="text-gold mr-3 mt-1">✓</div>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container-custom">
          <h2 className="section-title">프로세스</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            디자인크림은 체계적인 프로세스를 통해 고객님의 소중한 공간을 
            아름답고 실용적으로 변화시켜 드립니다.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/30 z-0"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {processList.map((process, index) => (
                  <div key={index} className="relative z-10">
                    <div
                      className={`flex items-center ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Timeline content */}
                      <div className="w-5/12">
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md ${
                            index % 2 === 0 ? "text-right mr-8" : "ml-8"
                          }`}
                        >
                          <h3 className="text-xl font-serif mb-2">
                            {process.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {process.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline icon */}
                      <div className="w-2/12 flex justify-center">
                        <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                          {process.icon}
                        </div>
                      </div>

                      {/* Empty space for alternate layout */}
                      <div className="w-5/12"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <h2 className="section-title">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqList.map((faq, index) => (
                <div
                  key={index}
                  className="bg-cream-light rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer font-medium">
                      <span>{faq.question}</span>
                      <span className="transition-transform group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </summary>
                    <div className="p-6 pt-0 text-muted-foreground">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold-dark py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            디자인크림과 함께 새로운 공간을 만들어보세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            무료 상담을 통해 당신의 공간에 맞는 최적의 인테리어 솔루션을 찾아드립니다.
            지금 바로 문의하세요.
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

export default Services;
