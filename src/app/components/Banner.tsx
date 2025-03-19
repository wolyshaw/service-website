import Image from 'next/image';

export default function Banner() {
  // 定义装饰性几何图形数据
  const decorations = [
    { shape: 'circle', color: 'pink-400' },
    { shape: 'square', color: 'blue-400' },
    { shape: 'triangle', color: 'indigo-400' },
    { shape: 'hexagon', color: 'cyan-400' }
  ];

  const services = [
    {
      title: "产品逻辑",
      subtitle: "Product Logic",
      description: "专注于产品策略与用户体验",
      bgColor: "bg-pink-500"
    },
    {
      title: "原型交互",
      subtitle: "Prototype Interaction",
      description: "打造流畅的交互体验",
      bgColor: "bg-blue-500"
    },
    {
      title: "视觉设计",
      subtitle: "Visual Design",
      description: "创造独特的视觉语言",
      bgColor: "bg-indigo-500"
    },
    {
      title: "技术研发",
      subtitle: "Technology Development",
      description: "技术驱动创新发展",
      bgColor: "bg-cyan-500"
    }
  ];

  return (
    <div className="w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br from-${service.bgColor}/90 to-${service.bgColor}/70 p-8 rounded-xl hover:scale-105 transition-transform cursor-pointer shadow-lg backdrop-blur-sm`}
            >
              {/* 装饰性几何图形 */}
              <div className={`absolute top-4 right-4 w-12 h-12 bg-${decorations[index].color}/20 rounded-lg transform rotate-45`}></div>

              <Image
                src={`/icon-${index + 1}.svg`}
                alt={service.title}
                width={48}
                height={48}
                className="mb-6 relative z-10"
              />
              <h3 className="text-white text-xl font-bold mb-3 relative z-10">{service.title}</h3>
              <p className="text-white/90 text-sm mb-3 relative z-10">{service.subtitle}</p>
              <p className="text-white/70 text-sm relative z-10">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
