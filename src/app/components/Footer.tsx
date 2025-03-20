import Image from 'next/image'
import Link from 'next/link'

type FooterCardProps = {
  title: string
  subtitle: string
  content: string
  image: string
  borderColor: string
}

function FooterCard({ title, subtitle, content, image }: FooterCardProps) {
  return (
    <div className="relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl rounded-xl border-t-4 border-white/20 transition-all duration-300">
      <div className="relative w-full h-48 grayscale group-hover:grayscale-0 transition-all duration-500">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/70 to-primary"></div>
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-base backdrop-blur-sm bg-gradient-to-b from-primary/30 to-primary/50 group-hover:from-primary/40 group-hover:to-primary/60 transition-all duration-300">
        <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-accent transition-colors">{title}</h3>
          <p className="text-sm mb-4 text-white/90 tracking-wider uppercase">{subtitle}</p>
          <div className="h-[1px] w-16 mx-auto bg-gradient-to-r from-transparent via-white to-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <p className="text-sm text-white/80 whitespace-pre-line text-center leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const footerCards = [
    {
      title: "创新思维",
      subtitle: "Innovation Thinking",
      content: "持续探索技术前沿\n用创新思维解决传统问题",
      image: "/footer/innovation.jpg",
      borderColor: "#3B82F6"
    },
    {
      title: "专业团队",
      subtitle: "Professional Team",
      content: "拥有丰富行业经验\n为客户提供最优质的解决方案",
      image: "/footer/team.jpg",
      borderColor: "#22D3EE"
    },
    {
      title: "优质服务",
      subtitle: "Quality Service",
      content: "全程专人对接\n确保项目顺利交付",
      image: "/footer/service.jpg",
      borderColor: "#0EA5E9"
    }
  ];

  const navLinks = [
    { href: '/cases', text: '案例' },
    { href: '/services', text: '服务' },
    { href: '/articles', text: '文章' }
  ];

  const socialLinks = [
    { name: 'WeChat', icon: '/social/wechat.svg', href: '#' },
    { name: 'Weibo', icon: '/social/weibo.svg', href: '#' },
    { name: 'LinkedIn', icon: '/social/linkedin.svg', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#112e82] via-[#1a3a9f] to-[#0a2575]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(34,211,238,0.1),transparent)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(255,255,255,0.05)_15%,transparent_30%,transparent_70%,rgba(255,255,255,0.05)_85%,transparent_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:32px_32px] opacity-10"></div>
      <div className="max-w-5xl mx-auto px-4 relative pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="flex space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white/80 hover:text-accent text-sm transition-colors"
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-110"
                aria-label={link.name}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={20}
                  height={20}
                  className="brightness-0 invert opacity-80 group-hover:opacity-100"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-white/70 text-sm tracking-wider">
            @CRECOHE 创禾聚力 All rights reserved. 蜀ICP备09013714号-4号
          </p>
        </div>
      </div>
    </footer>
  )
}
