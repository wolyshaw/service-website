import Navigation from './components/Navigation'
// import LogoAnimation from './components/LogoAnimation'
import ServiceCard from './components/ServiceCard'
// import Philosophy from './components/Philosophy'
// import CaseStudies from './components/CaseStudies'
import Footer from './components/Footer'
// import Banner from './components/Banner'
import Carousel from './components/Carousel'
import BoxTitle from './components/BoxTitle'
import Works from './components/Works'

export default function Home() {
  const services = [
    {
      title: "产品逻辑",
      subtitle: "Product Logic",
      description: "专注于产品策略与用户体验",
      variant: 'pink'
    },
    {
      title: "原型交互",
      subtitle: "Prototype Interaction",
      description: "打造流畅的交互体验",
      variant: 'blue'
    },
    {
      title: "视觉设计",
      subtitle: "Visual Design",
      description: "创造独特的视觉语言",
      variant: 'indigo'
    },
    {
      title: "技术研发",
      subtitle: "Technology Development",
      description: "技术驱动创新发展",
      variant: 'cyan'
    }
  ] as const;

  return (
    <div className="min-h-screen flex flex-col bg-white">

      <Navigation />

      <main className="flex-1">
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
        <div className="max-w-5xl w-full mx-auto shadow-xl ring ring-gray-200 rounded px-7 -mt-24 relative bg-white">
          <section className="py-8">
            <div className="flex justify-between max-w-6xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                />
              ))}
            </div>
          </section>

          <BoxTitle
            title='理念·信仰'
            content='致力于将视觉美学、技术力量、商业市场的融合 在意识与探索未知领域保持好奇心与尊重'
          />

          <Works />

          {/* <CaseStudies /> */}
        </div>
      </main>

      <Footer />
    </div>
  )
}
