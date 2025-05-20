
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
    preferredContact: "전화",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating API call
    setTimeout(() => {
      toast({
        title: "상담 신청 완료",
        description: "상담 신청이 성공적으로 접수되었습니다. 곧 연락드리겠습니다.",
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        message: "",
        preferredContact: "전화",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-cream-light py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">문의/연락처</h1>
            <p className="text-xl text-muted-foreground">
              디자인크림에 문의하고 전문적인 인테리어 상담을 받아보세요
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-cream-light p-8 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-serif mb-6">무료 상담 신청</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    연락처 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="연락처를 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    이메일
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="이메일을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-2">
                    인테리어 희망 주소
                  </label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="인테리어 희망 주소를 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    문의사항
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="문의사항을 입력해주세요"
                    rows={5}
                  />
                </div>

                <div>
                  <label htmlFor="preferredContact" className="block text-sm font-medium mb-2">
                    선호하는 연락 방법
                  </label>
                  <select
                    id="preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full border border-input rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gold"
                  >
                    <option value="전화">전화</option>
                    <option value="문자">문자</option>
                    <option value="이메일">이메일</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold hover:bg-gold-dark text-white"
                >
                  {loading ? "제출 중..." : "상담 신청하기"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif mb-6">연락처 정보</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">연락처</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gold mr-3"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <a href="tel:+8210-6276-5219" className="hover:text-gold">
                        010-6276-5219
                      </a>
                    </li>
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gold mr-3"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <a
                        href="mailto:laillic@naver.com"
                        className="hover:text-gold"
                      >
                        laillic@naver.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">블로그</h3>
                  <a
                    href="https://blog.naver.com/laillic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gold mr-3"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span className="group-hover:text-gold">
                      네이버 블로그 방문하기
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">카카오톡 상담</h3>
                  <Button className="bg-[#FEE500] hover:bg-[#F6DC00] text-black">
                    카카오톡으로 상담하기
                  </Button>
                </div>

                <div className="border-t border-gold/20 pt-8 mt-8">
                  <h3 className="text-xl font-medium mb-4">
                    디자인크림 서비스 이용 고객 후기
                  </h3>
                  <div className="space-y-4">
                    <blockquote className="italic border-l-4 border-gold pl-4 py-2">
                      "처음부터 끝까지 모든 과정이 투명하고 만족스러웠습니다. 특히 나경화 대표님이 직접 현장을 관리해주셔서 안심하고 맡길 수 있었어요."
                      <footer className="text-sm text-muted-foreground mt-1">
                        - 송파구 S아파트 고객
                      </footer>
                    </blockquote>
                    <blockquote className="italic border-l-4 border-gold pl-4 py-2">
                      "저희 가족의 생활 패턴을 고려한 맞춤형 디자인을 제안해주셔서 정말 실용적이면서도 예쁜 집이 되었습니다. 매일 집에 오는 것이 기대돼요."
                      <footer className="text-sm text-muted-foreground mt-1">
                        - 강남구 J아파트 고객
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Location Section could be added here */}
    </main>
  );
};

export default Contact;
