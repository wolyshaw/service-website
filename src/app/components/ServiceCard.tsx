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
    pink: 'from-pink-500 to-red-500',
    blue: 'from-blue-500 to-purple-500',
    indigo: 'from-blue-400 to-blue-600',
    cyan: 'from-cyan-400 to-blue-500'
  };

  const icons = {
    pink: '/icons/product-logic.svg',
    blue: '/icons/prototype.svg',
    indigo: '/icons/visual-design.svg',
    cyan: '/icons/tech.svg'
  };

  const className = `
    flex-1 mr-2 last:mr-0 p-6 rounded
    bg-gradient-to-br ${gradientClasses[variant]}
    transform hover:scale-105 transition-transform
    cursor-pointer min-h-86 flex flex-col justify-between
  `;

  return (
    <div className={className}>
      <div className='flex justify-between flex-col flex-1'>
        <div className="mb-4 border-b border-white/20 ">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm">{subtitle}</p>
        </div>

        <div className="flex justify-center my-6">
          <div className="w-16 h-16 relative">
            <Image
              src={icons[variant]}
              alt={title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        <div className="pt-4">
          <p className="text-white/60 text-sm">{description}</p>
        </div>
      </div>
    </div>
  )
}
