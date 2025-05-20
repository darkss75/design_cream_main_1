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
    title: "잠실 롯데캐슬 아파트",
    category: "",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074",
    detailImages: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074",
      "https://images.unsplash.com/photo-1616137148650-4aa14651e96a?q=80&w=2071",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070"
    ]
  },
  {
    id: 2,
    title: "반포 자이 아파트",
    category: "",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    detailImages: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070", 
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=2074",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2032",
      "https://images.unsplash.com/photo-1617298748161-7ddbf231e8a2?q=80&w=2070"
    ]
  },
  {
    id: 3,
    title: "송파 헬리오시티",
    category: "",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070",
    detailImages: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070",
      "https://images.unsplash.com/photo-1613685703305-cdb1d7547606?q=80&w=2070",
      "https://images.unsplash.com/photo-1613685703237-6628a4804ac9?q=80&w=2070",
      "https://images.unsplash.com/photo-1615529179035-e760f6a2dcee?q=80&w=2070"
    ]
  },
  {
    id: 4,
    title: "판교 알파리움",
    category: " ",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070",
    detailImages: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2070",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753376-12c6b48e1be7?q=80&w=2070", 
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074"
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
