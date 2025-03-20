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
    pink: 'from-primary-light via-primary to-primary-dark',
    blue: 'from-secondary-light via-secondary to-secondary-dark',
    indigo: 'from-accent-light via-accent to-accent-dark',
    cyan: 'from-secondary via-accent to-accent-dark'
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
    before:absolute before:inset-0 before:bg-white/5 before:rounded-xl
    after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/20 after:to-transparent after:rounded-xl
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
                className="object-contain brightness-0 invert"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-surface mb-1">{title}</h3>
              <p className="text-surface/80 text-sm tracking-wider uppercase">{subtitle}</p>
            </div>
          </div>
          <div className="h-[1px] bg-gradient-to-r from-surface/30 via-surface/10 to-surface/30 mb-6"></div>
        </div>

        <div>
          <p className="text-surface/90 text-base leading-relaxed">{description}</p>
          <div className="mt-6 flex justify-end">
            <div className="w-8 h-8 rounded-full bg-surface/10 flex items-center justify-center group-hover:bg-surface/20 transition-colors">
              <svg className="w-4 h-4 text-surface" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
