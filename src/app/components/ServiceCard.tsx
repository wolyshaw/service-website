import Image from 'next/image';

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  variant: 'product' | 'prototype' | 'design' | 'tech'
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  variant = 'product'
}: ServiceCardProps) {
  const gradientClasses = {
    product: 'from-[#112e82] via-[#1a3a9f] to-[#0a2575]',
    prototype: 'from-[#1a3a9f] via-[#0a2575] to-[#112e82]',
    design: 'from-[#0a2575] via-[#112e82] to-[#1a3a9f]',
    tech: 'from-[#112e82] via-[#0a2575] to-[#1a3a9f]'
  };

  const icons = {
    product: '/icons/product-logic.svg',
    prototype: '/icons/prototype.svg',
    design: '/icons/visual-design.svg',
    tech: '/icons/tech.svg'
  };

  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br shadow-lg hover:shadow-2xl transition-all duration-500">
      {/* 背景渐变 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[variant]} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>

      {/* 装饰效果 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_0%,rgba(34,211,238,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_15%,transparent_30%,transparent_70%,rgba(255,255,255,0.05)_85%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:32px_32px] opacity-10"></div>

      {/* 内容区域 */}
      <div className="relative z-10 p-8 min-h-[320px] flex flex-col">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 relative flex-shrink-0">
            <Image
              src={icons[variant]}
              alt={title}
              width={48}
              height={48}
              className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm tracking-wider uppercase">{subtitle}</p>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-white/30 mb-6"></div>

        <p className="text-white/90 text-base leading-relaxed flex-grow">{description}</p>

        <div className="mt-6 flex justify-end">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            <svg className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
