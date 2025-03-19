'use client';

import Image from 'next/image';

interface CaseStudyProps {
  image: string;
  title: string;
  tags: string[];
}

function CaseStudyCard({ image, title, tags }: CaseStudyProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer">
      <Image
        src={image}
        alt={title}
        width={300}
        height={400}
        className="w-full h-[400px] object-cover transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <div className="flex gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-sm text-white/80 bg-white/20 px-2 py-1 rounded">
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
      image: '/case1.jpg',
      title: '创意作品',
      tags: ['创意', '设计']
    },
    {
      image: '/case2.jpg',
      title: '品牌设计',
      tags: ['品牌', '设计']
    },
    // ... 更多案例
  ];

  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">精选案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <CaseStudyCard key={index} image={item.image} title={item.title} tags={item.tags} />
          ))}
        </div>
      </div>
    </div>
  );
}
