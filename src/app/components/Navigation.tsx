'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e2b5c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Image
              src="/logo-text.png"
              alt="Crecohe"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-white/80 transition-colors">首页</a>
            <a href="/cases" className="text-white hover:text-white/80 transition-colors">案例</a>
            <a href="/services" className="text-white hover:text-white/80 transition-colors">服务</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
