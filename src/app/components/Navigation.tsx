'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: '首页' },
    { href: '/cases', label: '案例' },
    { href: '/services', label: '服务' },
    { href: '/articles', label: '文章' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e2b5c]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-text.png"
              alt="Crecohe"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white transition-all border-b-2 py-1 ${
                  pathname === item.href
                    ? 'border-white opacity-100'
                    : 'border-transparent opacity-80 hover:opacity-100 hover:border-white/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
