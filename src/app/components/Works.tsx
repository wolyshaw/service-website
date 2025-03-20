'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface WorkItem {
  image: string
  title: string
  tags: string[]
  slug: string
}

function WorkCard({ image, title, tags, slug }: WorkItem) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/articles/${slug}`)
  }

  return (
    <div className="group overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300" onClick={handleClick}>
      <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-surface">
        <h3 className="text-primary text-lg font-bold mb-4 group-hover:text-secondary transition-colors">{title}</h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs px-3 py-1 rounded-full text-surface ${
                index % 2 === 0 ? 'bg-secondary' : 'bg-accent'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Works() {
  const works = [
    {
      title: "企业数字化转型解决方案",
      image: "/works/digital-transformation.jpg",
      tags: ["数字化转型", "系统架构"],
      slug: "digital-transformation"
    },
    {
      title: "智慧园区管理平台",
      image: "/works/smart-park.jpg",
      tags: ["物联网", "智慧园区"],
      slug: "smart-park"
    },
    {
      title: "品牌升级设计方案",
      image: "/works/brand-upgrade.jpg",
      tags: ["品牌设计", "视觉系统"],
      slug: "brand-upgrade"
    }
  ]

  return (
    <div className="py-24 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">精选案例</h2>
          <p className="text-primary/60">探索我们的成功案例</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </div>
  )
}
