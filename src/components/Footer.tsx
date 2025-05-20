
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cream-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-serif font-semibold mb-4">
              <span className="text-gold">DESIGN</span> CREAM
            </h2>
            <p className="text-muted-foreground mb-6">
              인테리어를 넘어 사람 자체와 맞닿은 공간 디자인
            </p>
            <div className="flex space-x-4">
              <a
                href="https://blog.naver.com/laillic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-gold"
              >
                네이버 블로그
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-muted-foreground">대표:</span>
                <span className="ml-2">나경화</span>
              </li>
              <li className="flex items-center">
                <span className="text-muted-foreground">전화:</span>
                <a
                  href="tel:+8210-6276-5219"
                  className="ml-2 hover:text-gold transition-colors"
                >
                  010-6276-5219
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-muted-foreground">이메일:</span>
                <a
                  href="mailto:laillic@naver.com"
                  className="ml-2 hover:text-gold transition-colors"
                >
                  laillic@naver.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-muted-foreground">블로그:</span>
                <a
                  href="https://blog.naver.com/laillic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 hover:text-gold transition-colors"
                >
                  blog.naver.com/laillic
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-10 pt-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} 디자인크림 (DESIGN CREAM). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
