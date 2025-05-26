import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const portfolioItems = [
  {
    id: 1,
    title: "강서 등촌마을 32평형",
    category: "",
    image: "/images/portfolio/main1.jpg",
    detailImages: [
      "/images/portfolio/detail1-1.jpg",
      "/images/portfolio/detail1-2.jpg",
      "/images/portfolio/detail1-3.jpg"
    ]
  },
  {
    id: 2,
    title: "분당 이매상성아파트 46평형",
    category: "",
    image: "/images/portfolio/main2.jpg",
    detailImages: [
      "/images/portfolio/detail2-1.jpg", 
      "/images/portfolio/detail2-2.jpg",
      "/images/portfolio/detail2-3.jpg"
    ]
  },
  {
    id: 3,
    title: "월계동 우남아파트 32평형",
    category: "",
    image: "/images/portfolio/main3.jpg",
    detailImages: [
      "/images/portfolio/detail3-1.jpg",
      "/images/portfolio/detail3-2.jpg",
      "/images/portfolio/detail3-3.jpg",
      "/images/portfolio/detail3-4.jpg"
    ]
  },
  {
    id: 4,
    title: "중계 10단지 24평형 ",
    category: " ",
    image: "/images/portfolio/main4.jpg",
    detailImages: [
      "/images/portfolio/detail4-1.jpg",
      "/images/portfolio/detail4-2.jpg",
      "/images/portfolio/detail4-3.jpg", 
      "/images/portfolio/detail4-4.jpg"
    ]
  },
];

const PortfolioPreview = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setSelectedItem(itemId);
  };

  const closeDialog = () => {
    setSelectedItem(null);
  };

  const getSelectedItem = () => {
    return portfolioItems.find(item => item.id === selectedItem);
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <h2 className="section-title">포트폴리오</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          디자인크림이 완성한 고객님들의 소중한 공간을 소개합니다.
          각 공간은 고객의 취향과 생활 방식을 반영하여 디자인되었습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(item.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                  hoveredItem === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <span className="text-gold text-sm mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Portfolio detail dialog */}
        {selectedItem !== null && (
          <Dialog open={selectedItem !== null} onOpenChange={closeDialog}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {getSelectedItem()?.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {getSelectedItem()?.detailImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-[4/3] overflow-hidden rounded-md">
                          <img 
                            src={image} 
                            alt={`${getSelectedItem()?.title} - 이미지 ${index+1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                <div className="mt-4 text-center text-muted-foreground">
                  <p>{getSelectedItem()?.category}</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default PortfolioPreview;
