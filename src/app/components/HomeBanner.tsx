'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  cta?: {
    text: string;
    link: string;
  };
}

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      image: "/carousel/slide1.jpg",
      title: "创新科技 引领未来",
      subtitle: "致力于为企业提供专业的数字化解决方案",
      cta: {
        text: "了解更多",
        link: "/services"
      }
    },
    {
      image: "/carousel/slide2.jpg",
      title: "专业团队 优质服务",
      subtitle: "拥有丰富行业经验的专业团队，为客户提供最优质的解决方案",
      cta: {
        text: "查看案例",
        link: "/cases"
      }
    },
    {
      image: "/carousel/slide3.jpg",
      title: "技术创新 驱动发展",
      subtitle: "持续探索技术前沿，助力企业实现数字化转型",
      cta: {
        text: "联系我们",
        link: "/contact"
      }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[600px] bg-primary-dark">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover opacity-70"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/80 to-transparent">
            <div className="max-w-6xl mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl">
                <h1
                  className={`text-5xl font-bold text-surface mb-6 transform transition-all duration-1000 delay-200
                    ${currentSlide === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-xl text-surface/90 mb-8 transform transition-all duration-1000 delay-400
                    ${currentSlide === index ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}
                >
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <Link
                    href={slide.cta.link}
                    className={`inline-block px-8 py-3 bg-accent text-surface font-bold
                      hover:bg-accent-dark hover:text-surface transition-all duration-300
                      transform transition-all duration-1000 delay-600 rounded-lg
                      ${currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  >
                    {slide.cta.text}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* 轮播指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${currentSlide === index ? 'bg-accent w-6' : 'bg-surface/50 hover:bg-surface/80'}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
