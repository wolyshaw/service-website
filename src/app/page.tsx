import Navigation from './components/Navigation'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import HomeBanner from './components/HomeBanner'

interface FeatureProps {
  title: string
  content: string
  icon: string
}

function Feature({ title, content, icon }: FeatureProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image
          src={icon}
          alt={title}
          width={48}
          height={48}
          className="object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#112e82] mb-2">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const services = [
    {
      title: "产品逻辑",
      subtitle: "Product Logic",
      description: "专注于产品策略与用户体验",
      variant: 'product'
    },
    {
      title: "原型交互",
      subtitle: "Prototype Interaction",
      description: "打造流畅的交互体验",
      variant: 'prototype'
    },
    {
      title: "视觉设计",
      subtitle: "Visual Design",
      description: "创造独特的视觉语言",
      variant: 'design'
    },
    {
      title: "技术研发",
      subtitle: "Technology Development",
      description: "技术驱动创新发展",
      variant: 'tech'
    }
  ] as const;

  const features = [
    {
      title: "专业团队",
      content: "拥有丰富行业经验的专业团队，为客户提供最优质的解决方案",
      icon: "/icons/team.svg"
    },
    {
      title: "创新思维",
      content: "持续探索技术前沿，用创新思维解决传统问题",
      icon: "/icons/innovation.svg"
    },
    {
      title: "优质服务",
      content: "全程专人对接，确保项目顺利交付，提供持续的技术支持",
      icon: "/icons/service.svg"
    }
  ];

  const latestWorks = [
    {
      title: "企业数字化转型",
      image: "/cases/case1.jpg",
      tags: ["系统架构", "数字化转型"],
      slug: "digital-transformation"
    },
    {
      title: "智慧园区平台",
      image: "/cases/case2.jpg",
      tags: ["智慧园区", "物联网"],
      slug: "smart-park"
    },
    {
      title: "品牌升级方案",
      image: "/cases/case3.jpg",
      tags: ["品牌设计", "视觉系统"],
      slug: "brand-upgrade"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        <HomeBanner />

        {/* 服务卡片区域 */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#112e82] mb-4">我们的服务</h2>
              <p className="text-gray-600">专注于为企业提供全方位的技术解决方案</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 特色优势区域 */}
        <div className="py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#112e82] mb-4">特色优势</h2>
              <p className="text-gray-600">专业能力保障，助力企业创新发展</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <Feature key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* 最新案例区域 */}
        <div className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#112e82] mb-4">最新案例</h2>
              <p className="text-gray-600">探索我们的成功案例</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestWorks.map((work, index) => (
                <Link
                  key={index}
                  href={`/articles/${work.slug}`}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#112e82] mb-4 group-hover:text-blue-600 transition-colors">
                      {work.title}
                    </h3>
                    <div className="flex gap-2">
                      {work.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#112e82] text-white text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/cases"
                className="inline-block px-8 py-3 bg-[#112e82] text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                查看更多案例
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
