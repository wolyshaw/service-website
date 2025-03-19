import Image from 'next/image'
import Link from 'next/link'

type FooterCardProps = {
  title: string
  subtitle: string
  content: string
  image: string
  borderColor: string
}

function FooterCard({ title, subtitle, content, image, borderColor }: FooterCardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden shadow border-t-8" style={{borderColor}}>
      <div className="relative w-full h-48 grayscale group-hover:grayscale-0 transition-all duration-300">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-500 p-6 text-base">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-3">{subtitle}</p>
        <p className="text-sm text-gray-800 whitespace-pre-line text-center">{content}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  const footerCards = [
    {
      title: '合作',
      subtitle: 'Cooperation',
      content: 'shaw@crecohe.com',
      image: '/footer/cooperation.jpg',
      borderColor: 'var(--color-red-500)' // 自定义 borde
    },
    {
      title: '加入',
      subtitle: 'Join Us',
      content: 'CRETEAM计划\nCRE DESIGN开源',
      image: '/footer/join.jpg',
      borderColor: 'var(--color-purple-500)' // 自定义 borde
    },
    {
      title: '联系',
      subtitle: 'Contact',
      content: '中国成都IFS国际金融中心\n2号办公楼27层',
      image: '/footer/contact.jpg',
      borderColor: 'var(--color-cyan-500)' // 自定义 borde
    }
  ]

  const navLinks = [
    { text: '案例', href: '/cases' },
    { text: '服务', href: '/services' },
    { text: '团队', href: '/team' },
    { text: 'BLOG', href: '/blog' }
  ]

  const socialLinks = [
    { icon: '/wechat.svg', href: '#', name: 'Wechat' },
    { icon: '/blog.svg', href: '#', name: 'Blog' },
    { icon: '/zhihu.svg', href: '#', name: 'Zhihu' }
  ]

  return (
    <footer className="bg-[#1e2b5c] mt-32 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-12">
          {footerCards.map((card, index) => (
            <FooterCard key={index} {...card} />
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            <Image
              src="/logo.svg"
              alt="创禾聚力"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
            <div className="flex space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={link.name}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={20}
                  height={20}
                  className="brightness-0 invert"
                />
              </Link>
            ))}
          </div>
        </div>

        <p className="text-center text-white/60 text-sm mt-8">
          @CRECOHE 创禾聚力 All rights reserved. 蜀ICP备09013714号-4号
        </p>
      </div>
    </footer>
  )
}
