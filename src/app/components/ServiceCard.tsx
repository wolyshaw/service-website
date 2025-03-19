
interface ServiceCardProps {
  title: string
  subtitle: string
  description: string
  gradientFrom: string
  gradientTo: string
}

export default function ServiceCard({
  title,
  subtitle,
  description,
  gradientFrom,
  gradientTo
}: ServiceCardProps) {
  const className = `flex-1 mr-2 last:mr-0 p-6 rounded bg-gradient-to-br transform hover:scale-105 transition-transform cursor-pointer min-h-86 flex flex-col justify-between from-${gradientFrom} to-${gradientTo}`
  return (
    <div className={className}>
      <div>
        <div className="pv-2 mb-2 border-b text-white">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        </div>
        <p className="text-white/80 text-sm mb-4">{subtitle}</p>
      </div>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  )
}
