'use client'

import Image from 'next/image'
import Link from 'next/link'

interface ArticlePreview {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  tags: string[]
}

export default function ArticleList() {
  const articles: ArticlePreview[] = [
    {
      slug: 'design-thinking',
      title: '创新设计思维：用户体验的革新之路',
      excerpt: '在数字化时代，设计思维已经成为推动创新的核心力量...',
      coverImage: '/articles/design-thinking.jpg',
      date: '2024-03-20',
      tags: ['设计思维', '用户体验']
    },
    // 可以添加更多文章
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
      {articles.map((article, index) => (
        <Link
          href={`/articles/${article.slug}`}
          key={index}
          className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="p-6">
            <div className="flex gap-2 mb-4">
              {article.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm text-white bg-[#1e2b5c] px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#1e2b5c] transition-colors">
              {article.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">
              {article.excerpt}
            </p>

            <div className="text-sm text-gray-500">
              {article.date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
