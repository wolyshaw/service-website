'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type WorkItem = {
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
    <div className="group overflow-hidden rounded-lg cursor-pointer" onClick={handleClick}>
      <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-gray-900 text-lg font-bold mb-2">{title}</h3>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <span key={index} className={`text-xs px-2 py-1 text-white ${index === 0 ? 'bg-red-500' : 'bg-blue-500'}`}>
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
      image: "http://www.crecohe.com/static/img/p2.09d9e0c.jpg",
      title: "智慧打造，协同共赢",
      tags: ["全屏视频背景", "移动端设计"],
      slug: "smart-collaboration"
    },
    {
      image: "http://www.crecohe.com/static/img/p2.09d9e0c.jpg",
      title: "智慧打造，协同共赢",
      tags: ["全屏视频背景", "移动端设计"],
      slug: "smart-design"
    },
    {
      image: "http://www.crecohe.com/static/img/p2.09d9e0c.jpg",
      title: "智慧打造，协同共赢",
      tags: ["全屏视频背景", "移动端设计"],
      slug: "mobile-design"
    },
    {
      image: "http://www.crecohe.com/static/img/p2.09d9e0c.jpg",
      title: "智慧打造，协同共赢",
      tags: ["全屏视频背景", "移动端设计"],
      slug: "video-background"
    }
  ]

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  )
}
