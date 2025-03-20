import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

interface CaseItemProps {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
  client: string
  index: number
}

function CaseItem({ title, description, image, tags, client, slug, index }: CaseItemProps) {
  const isEven = index % 2 === 0

  return (
    <Link
      href={`/articles/${slug}`}
      className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-12 items-center py-16 border-b border-gray-100 group`}
    >
      <div className="flex-1">
        <div className="mb-4">
          <p className="text-gray-500 mb-2">客户：{client}</p>
          <h3 className="text-[#112e82] text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        </div>
        <p className="text-gray-700 mb-6 line-clamp-3">{description}</p>
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#112e82] text-white text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="w-[500px] h-[300px] relative bg-gray-50 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  )
}

export default function CasesPage() {
  const cases = [
    {
      title: "企业数字化转型解决方案",
      description: "为某大型制造企业提供全方位的数字化转型解决方案，包括系统架构重构、业务流程优化、数据分析平台搭建等，帮助企业实现效率提升和成本降低。",
      image: "/cases/case1.jpg",
      tags: ["系统架构", "数字化转型", "数据分析"],
      client: "某大型制造企业",
      slug: "digital-transformation"
    },
    {
      title: "智慧园区管理平台",
      description: "开发智慧园区综合管理平台，整合安防、能源、物业等多个系统，实现园区的智能化、数字化管理，提升园区运营效率和服务质量。",
      image: "/cases/case2.jpg",
      tags: ["智慧园区", "物联网", "系统集成"],
      client: "某科技园区",
      slug: "smart-park"
    },
    {
      title: "企业品牌升级项目",
      description: "为客户进行品牌形象升级，包括品牌战略梳理、视觉系统重构、线上线下物料设计等，助力企业品牌形象焕新。",
      image: "/cases/case3.jpg",
      tags: ["品牌设计", "视觉系统", "营销策略"],
      client: "某新能源企业",
      slug: "brand-upgrade"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white pt-20">
      <Navigation />

      <main className="flex-1">
        {/* 头部标题区域 */}
        <div className="bg-[#112e82] text-white py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">案例展示</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              探索我们为不同行业客户提供的创新解决方案，见证数字化转型的成功实践
            </p>
          </div>
        </div>

        {/* 案例列表区域 */}
        <div className="max-w-6xl mx-auto px-4">
          {cases.map((item, index) => (
            <CaseItem
              key={index}
              {...item}
              index={index}
            />
          ))}
        </div>

        {/* 合作理念区域 */}
        <div className="bg-gray-50 py-24 mt-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#112e82] mb-8">合作理念</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              我们始终坚持以客户需求为导向，通过专业的技术能力和创新思维，
              为客户提供有价值的解决方案，助力企业在数字时代保持持续竞争力。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
