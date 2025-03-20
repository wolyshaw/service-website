'use client';

import Image from 'next/image';

interface CaseStudyProps {
  image: string;
  title: string;
  tags: string[];
}

function CaseStudyCard({ image, title, tags }: CaseStudyProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-surface text-xl font-bold mb-4">{title}</h3>
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-sm text-surface bg-accent/20 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  const cases = [
    {
      image: "/cases/digital-transformation.jpg",
      title: "企业数字化转型",
      tags: ["系统架构", "数字化转型"]
    },
    {
      image: "/cases/smart-park.jpg",
      title: "智慧园区平台",
      tags: ["智慧园区", "物联网"]
    },
    {
      image: "/cases/brand-upgrade.jpg",
      title: "品牌升级方案",
      tags: ["品牌设计", "视觉系统"]
    }
  ];

  return (
    <div className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-4">案例展示</h2>
          <p className="text-primary/60">探索我们的成功案例</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <CaseStudyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
