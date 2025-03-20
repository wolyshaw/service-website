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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#112e82] via-[#1a3a9f] to-[#0a2575] shadow-lg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_0%,rgba(34,211,238,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_15%,transparent_30%,transparent_70%,rgba(255,255,255,0.05)_85%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:32px_32px] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center relative z-10">
            <Image
              src="/logo-text.png"
              alt="Crecohe"
              width={120}
              height={30}
              className="h-8 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-medium transition-all border-b-2 py-1 relative
                  after:absolute after:left-0 after:right-0 after:-bottom-[1.5px] after:h-[2px] after:rounded-full
                  after:transition-transform after:duration-300
                  ${
                    pathname === item.href
                      ? 'text-accent after:bg-accent after:scale-x-100'
                      : 'after:bg-white/50 after:scale-x-0 hover:after:scale-x-100 opacity-80 hover:opacity-100'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </nav>
  );
}
