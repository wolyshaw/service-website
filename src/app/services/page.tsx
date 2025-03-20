import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'

interface ServiceItemProps {
  title: string
  subtitle: string
  description: string
  icon: string
  features: string[]
  index: number
}

function ServiceItem({ title, subtitle, description, icon, features, index }: ServiceItemProps) {
  const isEven = index % 2 === 0

  return (
    <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center py-16 border-b border-gray-100`}>
      <div className="flex-1">
        <div className="mb-6">
          <h3 className="text-[#112e82] text-3xl font-bold mb-2">{title}</h3>
          <p className="text-gray-500 text-lg">{subtitle}</p>
        </div>
        <p className="text-gray-700 mb-8">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-[#112e82] rounded-full mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-96 h-96 relative bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const services = [
    {
      title: "产品逻辑",
      subtitle: "Product Logic",
      description: "通过深入的市场研究和用户分析，我们帮助企业构建清晰的产品战略和完整的产品逻辑体系。",
      icon: "/services/product-logic.jpg",
      features: [
        "用户需求分析与市场调研",
        "产品战略规划与定位",
        "业务流程优化",
        "产品路线图制定"
      ]
    },
    {
      title: "原型交互",
      subtitle: "Prototype Interaction",
      description: "基于用户体验设计理念，打造流畅的产品交互体验，确保产品易用性和用户满意度。",
      icon: "/services/prototype.jpg",
      features: [
        "用户界面设计",
        "交互流程优化",
        "原型验证与测试",
        "可用性评估"
      ]
    },
    {
      title: "视觉设计",
      subtitle: "Visual Design",
      description: "结合品牌调性和产品特点，创造独特的视觉语言，提升产品识别度和美感。",
      icon: "/services/visual-design.jpg",
      features: [
        "品牌视觉系统设计",
        "界面视觉设计",
        "动效设计",
        "设计规范建立"
      ]
    },
    {
      title: "技术研发",
      subtitle: "Technology Development",
      description: "采用前沿技术架构，为企业提供稳定、高效、可扩展的技术解决方案。",
      icon: "/services/tech-dev.jpg",
      features: [
        "技术架构设计",
        "全栈开发实现",
        "性能优化",
        "技术支持服务"
      ]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white pt-20">
      <Navigation />

      <main className="flex-1">
        {/* 头部标题区域 */}
        <div className="bg-[#112e82] text-white py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">专业服务</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              我们提供全方位的设计与技术解决方案，助力企业数字化转型，创造更大的商业价值
            </p>
          </div>
        </div>

        {/* 服务内容区域 */}
        <div className="max-w-6xl mx-auto px-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>

        {/* 服务理念区域 */}
        <div className="bg-gray-50 py-24 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#112e82] mb-8">服务理念</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              秉持&ldquo;专业、创新、务实&rdquo;的服务理念，我们致力于为客户提供最优质的解决方案。
              通过深入理解客户需求，结合行业经验和技术创新，帮助企业在数字化转型中保持竞争优势。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
