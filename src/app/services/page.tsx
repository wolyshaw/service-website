import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'
import Carousel from '../components/Carousel'

export default function ServicesPage() {
  const services = [
    {
      title: "产品逻辑",
      subtitle: "Product Logic",
      description: "专注于产品策略与用户体验",
      gradientFrom: "pink-500",
      gradientTo: "red-500"
    },
    {
      title: "原型交互",
      subtitle: "Prototype Interaction",
      description: "打造流畅的交互体验",
      gradientFrom: "blue-500",
      gradientTo: "purple-500"
    },
    {
      title: "视觉设计",
      subtitle: "Visual Design",
      description: "创造独特的视觉语言",
      gradientFrom: "blue-400",
      gradientTo: "blue-600"
    },
    {
      title: "技术研发",
      subtitle: "Technology Development",
      description: "技术驱动的创新发展",
      gradientFrom: "cyan-400",
      gradientTo: "blue-500"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <div className="relative">
        <Carousel
          images={[
            "/carousel/slide1.jpg",
            "/carousel/slide2.jpg",
            "/carousel/slide3.jpg",
            "/carousel/slide4.jpg",
            "/carousel/slide5.jpg"
          ]}
        />
      </div>

      <main className="max-w-5xl w-full mx-auto shadow-xl ring ring-gray-200 rounded px-7 -mt-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 pt-8">
          <div className='text-[#112e82] flex items-center mb-12'>
            <span className='text-5xl font-bold'>SERVICE</span>
            <span className='inline-block ml-20 text-3xl font-light'>服务内容</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">我们的服务理念</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们致力于为客户提供全方位的设计与技术解决方案，通过深入理解客户需求，
              结合创新思维和专业技术，帮助企业实现数字化转型，创造更大的商业价值。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}