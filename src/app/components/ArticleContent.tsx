'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ArticleData {
  title: string
  author: string
  date: string
  coverImage: string
  content: string
  tags: string[]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ArticleContent({ slug }: { slug: string }) {
  const [article] = useState<ArticleData>({
    title: "创新设计思维：用户体验的革新之路",
    author: "Crecohe Team",
    date: "2024-03-20",
    coverImage: "/articles/design-thinking.jpg",
    content: `在数字化时代，设计思维已经成为推动创新的核心力量。本文将深入探讨如何通过设计思维
    方法论来提升用户体验，创造更有价值的产品。

    设计思维的核心要素：
    1. 同理心：深入理解用户需求
    2. 定义问题：准确把握痛点
    3. 创意发想：突破常规思维
    4. 原型验证：快速迭代优化
    5. 测试反馈：持续改进提升

    通过实践设计思维，我们能够：
    • 更好地理解用户需求
    • 发现创新机会
    • 降低开发风险
    • 提升产品价值

    在未来的产品开发中，设计思维将继续发挥重要作用，推动产品创新和用户体验的提升。`,
    tags: ["设计思维", "用户体验", "创新", "产品设计"]
  })

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden mt-20">
      {/* 文章封面图 */}
      <div className="relative h-[400px] w-full">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* 文章内容 */}
      <div className="p-8">
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-6">
          <span>{article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>

        <div className="flex gap-2 mb-8">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm text-white bg-[#1e2b5c] px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  )
}
