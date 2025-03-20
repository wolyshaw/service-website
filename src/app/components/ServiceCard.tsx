import Image from 'next/image';

interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  variant: 'pink' | 'blue' | 'indigo' | 'cyan'
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  variant = 'pink'
}: ServiceCardProps) {
  const gradientClasses = {
    pink: 'from-[#112e82] via-[#1a3a9f] to-[#0a2575]',
    blue: 'from-[#1a3a9f] via-[#0a2575] to-[#112e82]',
    indigo: 'from-[#0a2575] via-[#112e82] to-[#1a3a9f]',
    cyan: 'from-[#112e82] via-[#0a2575] to-[#1a3a9f]'
  };

  const icons = {
    pink: '/icons/product-logic.svg',
    blue: '/icons/prototype.svg',
    indigo: '/icons/visual-design.svg',
    cyan: '/icons/tech.svg'
  };

  const className = `
    flex-1 mr-2 last:mr-0 p-8 rounded-xl
    bg-gradient-to-br ${gradientClasses[variant]}
    transform hover:scale-105 transition-all duration-300
    cursor-pointer min-h-[320px] flex flex-col justify-between
    shadow-lg hover:shadow-2xl relative
    before:absolute before:inset-0 before:bg-[radial-gradient(circle_800px_at_100%_0%,rgba(34,211,238,0.1),transparent)] before:rounded-xl
    after:absolute after:inset-0 after:bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_15%,transparent_30%,transparent_70%,rgba(255,255,255,0.05)_85%,transparent_100%)]
  `;

  return (
    <div className={className}>
      <div className='flex justify-between flex-col flex-1 relative z-10'>
        <div>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 relative mr-4">
              <Image
                src={icons[variant]}
                alt={title}
                width={48}
                height={48}
                className="object-contain brightness-0 invert opacity-90"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
              <p className="text-white/80 text-sm tracking-wider uppercase">{subtitle}</p>
            </div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-white/30 mb-6"></div>
        </div>

        <div>
          <p className="text-white/90 text-base leading-relaxed">{description}</p>
          <div className="mt-6 flex justify-end">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
