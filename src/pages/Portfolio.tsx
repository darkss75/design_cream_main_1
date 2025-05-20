
import { useState } from "react";

const categories = ["전체", "전체시공", "부분 리모델링", "주방", "욕실", "거실", "침실"];

const portfolioItems = [
  {
    id: 1,
    title: "잠실 롯데캐슬 아파트",
    category: "전체시공",
    description: "밝고 따뜻한 느낌의 모던 클래식 스타일 인테리어",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1935",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992",
    ],
  },
  {
    id: 2,
    title: "반포 자이 아파트",
    category: "부분 리모델링",
    description: "미니멀한 디자인으로 넓어 보이는 공간 연출",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?q=80&w=1932",
      "https://images.unsplash.com/photo-1633505649377-f8401278647b?q=80&w=1925",
    ],
  },
  {
    id: 3,
    title: "송파 헬리오시티",
    category: "전체시공",
    description: "자연 채광을 극대화한 밝은 거실과 주방 공간",
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070",
      "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?q=80&w=2080",
      "https://images.unsplash.com/photo-1616137311622-a9ef13cf6a33?q=80&w=1932",
    ],
  },
  {
    id: 4,
    title: "판교 알파리움",
    category: "주방",
    description: "고급 자재를 활용한 모던한 주방 인테리어",
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070",
      "https://images.unsplash.com/photo-1572297794744-a49904f2c893?q=80&w=2066",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2070",
    ],
  },
  {
    id: 5,
    title: "강남 래미안 아파트",
    category: "욕실",
    description: "호텔식 욕실로 편안함과 고급스러움을 동시에 제공",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    ],
  },
  {
    id: 6,
    title: "김포 한강신도시",
    category: "거실",
    description: "넓은 공간감을 살린 개방형 거실 디자인",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1974",
      "https://images.unsplash.com/photo-1598928506311-c5b7a0d920e4?q=80&w=2070",
      "https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?q=80&w=2071",
    ],
  },
  {
    id: 7,
    title: "동탄 메타폴리스",
    category: "침실",
    description: "편안함과 아늑함이 공존하는 침실 인테리어",
    images: [
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1780",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1780",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1780",
    ],
  },
  {
    id: 8,
    title: "분당 파크뷰",
    category: "전체시공",
    description: "자연친화적인 소재를 활용한 따뜻한 공간 연출",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158",
    ],
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems =
    selectedCategory === "전체"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openProject = (id: number) => {
    setSelectedProject(id);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const project = portfolioItems.find((item) => item.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const project = portfolioItems.find((item) => item.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const selectedProjectData = portfolioItems.find((item) => item.id === selectedProject);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream-light py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">포트폴리오</h1>
            <p className="text-xl text-muted-foreground">
              디자인크림이 만들어낸 아름다운 공간들을 만나보세요
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-gold text-white"
                    : "bg-cream-light text-muted-foreground hover:bg-gold/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => openProject(item.id)}
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-gold text-sm">{item.category}</span>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          {/* No results message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                해당 카테고리의 프로젝트가 없습니다.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && selectedProjectData && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white max-w-5xl w-full rounded-lg overflow-hidden max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 z-10"
              aria-label="Close modal"
            >
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            {/* Image carousel */}
            <div className="relative flex-grow overflow-hidden">
              <div className="h-[50vh] md:h-[60vh]">
                <img
                  src={selectedProjectData.images[currentImageIndex]}
                  alt={`${selectedProjectData.title} image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                aria-label="Previous image"
              >
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                aria-label="Next image"
              >
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
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Image thumbnails */}
            <div className="flex p-3 gap-2 overflow-x-auto">
              {selectedProjectData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                  className={`w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 ${
                    currentImageIndex === index ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${selectedProjectData.title} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Project details */}
            <div className="p-5 border-t">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-gold text-sm">{selectedProjectData.category}</span>
                  <h3 className="text-2xl font-medium">{selectedProjectData.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {selectedProjectData.description}
                  </p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentImageIndex + 1}/{selectedProjectData.images.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
